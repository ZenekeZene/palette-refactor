import { ColorGroup } from '@frontend/adapter/store/types/store.d'
import { ColorStatusTypes, type Colors } from '../../types/store.d'
import type { ColorStoreState } from '../../slices/colorStore/colorStore.d'

export const failColor = (colorState: ColorStoreState): Colors | undefined => {
  const colors = colorState.colors
  colors.items.forEach((color: ColorGroup) => {
    if (color.status !== ColorStatusTypes.PENDING) return
    color.status = ColorStatusTypes.FAIL
  })
  return colors
}
