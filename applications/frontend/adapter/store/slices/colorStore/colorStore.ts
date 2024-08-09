import { StateCreator } from 'zustand'
import type { Store } from '../../types/store'
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
  nextSwatchColor: () => {
    set((state: ColorStore) => ({
      ...state,
      ...actions.getNextSwatchColor(get()),
    }))
  },
  mixColor: (subtractedColorId: string): void => {
    // const response = actions.mixColor(subtractedColorId, get())
    // if OK => get().nextSwatchColor()
    // if KO => Lose!
  },
  generateColors: () => {
    set((state: ColorStore) => ({
      ...state,
      colors: actions.generateColors(get()),
    }))
  },
})
