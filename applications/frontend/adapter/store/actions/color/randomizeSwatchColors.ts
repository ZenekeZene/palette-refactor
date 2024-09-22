import { isDebugMode } from '@frontend/infrastructure/isDebugMode'
import type { Color, ColorGroup, Colors } from '../../types/store'

const sortColors = (swatchColors: Color[]) =>
  swatchColors.sort(() => Math.random() - 0.5)

export const randomizeSwatchColors = ({ colors }: { colors: Colors }) => {
  const swatchColors = colors.items.map((colorGroup: ColorGroup) => ({
    ...colorGroup.swatchColor,
    ...(isDebugMode && { spy: colorGroup.spy }),
  }))

  return sortColors(swatchColors)
}
