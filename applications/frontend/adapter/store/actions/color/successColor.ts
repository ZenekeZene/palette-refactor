import { ColorGroup } from '@frontend/adapter/store/types/store.d'
import { ColorStatusTypes, type Colors } from '../../types/store.d'
import type { ColorStoreState } from '../../slices/colorStore/colorStore.d'
import { goTo } from '@frontend/adapter/router/goTo'
import { NextLevelView } from '@frontend/ui/views/NextLevel/NextLevel'

const areAllMixed = (colors: ColorGroup[]): boolean =>
  colors.every((color: ColorGroup) => color.status === ColorStatusTypes.MIXED)

const changeColorStatusToMixed = (
  items: ColorGroup[],
  colorGroupId: string,
): ColorGroup[] =>
  items.map((color: ColorGroup): ColorGroup => {
    if (color.id !== colorGroupId) return color
    return { ...color, status: ColorStatusTypes.MIXED }
  })

export const successColor = (
  colorState: ColorStoreState,
  colorGroupId: string,
): Colors => {
  const colors = colorState.colors!
  const updatedColors = {
    ...colors,
    items: changeColorStatusToMixed(colors.items, colorGroupId),
  }
  const allMixed = areAllMixed(updatedColors.items)
  if (allMixed) {
    goTo(NextLevelView.path)
  }
  return updatedColors
}
