import { StateCreator } from 'zustand'
import { ColorGroup } from '@frontend/adapter/store/types/store.d'
import { isDebugMode } from '@frontend/infrastructure/isDebugMode'
import { randomizeSwatchColors } from '../../actions/color/randomizeSwatchColors'
import { getNextSwatchColor } from '../../actions/color/getNextSwatchColor'
import { mixColor } from '../../actions/color/mixColor'
import { successColor } from '../../actions/color/successColor'
import { failColor } from '../../actions/color/failColor'
import { generateColors } from '../../actions/color/generateColors'
import { type Store } from '../../types/store.d'
import type { ColorStore } from './colorStore.d'
import { initialState } from './colorStore.initialState'

export const createColorStore: StateCreator<Store, [], [], ColorStore> = (
  set,
  get,
) => ({
  ...initialState,
  extractSwatchColors: () => {
    const swatchColorsRandomized = randomizeSwatchColors(get())

    set((state: ColorStore) => ({
      ...state,
      swatchColors: swatchColorsRandomized,
      swatchColor: swatchColorsRandomized[get().indexSwatchColor],
    }))
  },
  nextSwatchColor: (colorGroupMixed: ColorGroup) => {
    set((state: ColorStore) => ({
      ...state,
      ...getNextSwatchColor(get(), colorGroupMixed),
    }))
  },
  mixColor: (colorGroupId: string, swatchColorId: string) => {
    mixColor(colorGroupId, swatchColorId)
  },
  successColor: (colorGroupId: string) => {
    set((state: ColorStore) => ({
      ...state,
      colors: successColor(get(), colorGroupId),
    }))
  },
  failColor: () => {
    set((state: ColorStore) => ({
      ...state,
      colors: failColor(get()),
    }))
  },
  generateColors: () => {
    const colors = generateColors(get())
    if (isDebugMode) {
      colors.items.map((item) => {
        const spy = item.resultColor.id.substring(0, 3)
        item.spy = spy
      })
    }

    set((state: ColorStore) => ({
      ...state,
      colors,
    }))
    get().extractSwatchColors()
  },
})
