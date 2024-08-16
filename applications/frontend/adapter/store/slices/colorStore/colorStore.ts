import { StateCreator } from 'zustand'
import { ColorGroup } from '@frontend/adapter/store/types/store.d'
import { MixColorResponse, type Store } from '../../types/store.d'
import type { ColorStore, ColorStoreState } from './colorStore.d'
import { actions } from '../../actions/actions'

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
      ...actions.getNextSwatchColor(get()),
    }))
  },
  mixColor: (colorGroupId: string, swatchColorId: string): void => {
    const response = actions.mixColor(colorGroupId, swatchColorId)
    if (response instanceof Error) {
      console.error(response)
    } else {
      const { result } = response
      result.isOk()
        ? get().handleSuccessColor(response, colorGroupId)
        : get().handleFailColor(response)
    }
  },
  handleSuccessColor: (
    response: MixColorResponse,
    colorGroupId: string,
  ): void => {
    actions.notifyColorMixSuccess(response)
    get().nextSwatchColor()
    get().successColor(colorGroupId)
  },
  handleFailColor: (response: MixColorResponse): void => {
    actions.notifyColorMixFailure(response)
    get().failColor()
    setTimeout(() => {
      location.href = 'try-again'
    }, 2000)
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
