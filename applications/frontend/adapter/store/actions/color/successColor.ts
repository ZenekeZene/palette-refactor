import { ColorGroup } from '@frontend/adapter/store/types/store.d'
import { ColorStatusTypes, type Colors } from '../../types/store.d'
import type { ColorStoreState } from '../../slices/colorStore/colorStore.d'

export const successColor = (
  colorState: ColorStoreState,
  colorGroupId: string,
): Colors | undefined => {
  const colors = colorState.colors
  colors?.items.forEach((color: ColorGroup) => {
    if (color.id !== colorGroupId) return
    color.status = ColorStatusTypes.MIXED
  })
  return colors
}
