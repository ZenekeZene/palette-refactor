import type { ColorStoreState } from '../../slices/colorStore/colorStore.d'
import { Color } from '../../types/store'

interface Response {
  indexSwatchColor: number
  swatchColor: Color | null
}

export const getNextSwatchColor = (colorState: ColorStoreState): Response => {
  const swatchColors = colorState.swatchColors
  const prev = colorState.indexSwatchColor
  const indexSwatchColor = (prev + 1) % swatchColors.length
  const swatchColor = swatchColors[indexSwatchColor] ?? null
  return { indexSwatchColor, swatchColor }
}
