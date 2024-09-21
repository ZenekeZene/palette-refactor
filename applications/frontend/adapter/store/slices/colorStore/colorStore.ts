import { StateCreator } from 'zustand'
import { ColorGroup } from '@frontend/adapter/store/types/store.d'
import { type Store } from '../../types/store.d'
import { actions } from '../../actions/actions'
import type { ColorStore, ColorStoreState } from './colorStore.d'

const initialState: ColorStoreState = {
  indexSwatchColor: 0,
  swatchColor: undefined,
  swatchColors: [],
  colors: undefined,
}

export const createColorStore: StateCreator<Store, [], [], ColorStore> = (
  set,
  get,
) => ({
  ...initialState,
  extractSwatchColors: () => {
    const swatchColors = get().colors.items.map(
      (colorGroup: ColorGroup) => colorGroup.swatchColor,
    )
    set((state: ColorStore) => ({
      ...state,
      swatchColors,
      swatchColor: swatchColors[get().indexSwatchColor],
    }))
  },
  nextSwatchColor: () => {
    set((state: ColorStore) => ({
      ...state,
      ...actions.getNextSwatchColor(get(), colorGroupMixed),
    }))
  },
  mixColor: (colorGroupId: string, swatchColorId: string): void => {
    actions.mixColor(colorGroupId, swatchColorId)
  },
  successColor: (colorGroupId: string): void => {
    set((state: ColorStore) => ({
      ...state,
      colors: actions.successColor(get(), colorGroupId),
    }))
  },
  failColor: (): void => {
    set((state: ColorStore) => ({
      ...state,
      colors: actions.failColor(get()),
    }))
  },
  generateColors: () => {
    set((state: ColorStore) => ({
      ...state,
      colors: actions.generateColors(get()),
    }))
    get().extractSwatchColors()
  },
})
