import type { ColorStoreState } from '../../slices/colorStore/colorStore.d'
import { Color, ColorGroup } from '../../types/store'

interface Response {
  indexSwatchColor: number
  swatchColor: Color | null
  swatchColors: Color[]
}

export const getNextSwatchColor = (
  colorState: ColorStoreState,
  colorGroupMixed: ColorGroup,
): Response => {
  const swatchColors = colorState.swatchColors
  const prev = colorState.indexSwatchColor
  // TODO: use primitives (search in frontend app by 'valueOf')
  const swatchColorsFiltered = swatchColors.filter(
    (swatchColor) =>
      swatchColor.id !== colorGroupMixed.swatchColor.id.valueOf(),
  )
  const indexSwatchColor = (prev + 1) % swatchColorsFiltered.length
  const swatchColor = swatchColorsFiltered[indexSwatchColor] ?? null
  return { indexSwatchColor, swatchColor, swatchColors: swatchColorsFiltered }
}
