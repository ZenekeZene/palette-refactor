import { StateCreator } from 'zustand'
import { type Store } from '../../types/store.d'
import { actions } from '../../actions/actions'
import type { ColorStore, ColorStoreState } from './colorStore.d'
import { GenerateColorsItem } from '@gameContext/color/application/dto/GenerateColorsResponse'

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
      (color: GenerateColorsItem) => color.swatchColor,
    )
    const initialSwatchColor = swatchColors[get().indexSwatchColor]
    set((state: ColorStore) => ({
      ...state,
      swatchColors,
      swatchColor: initialSwatchColor,
    }))
  },
  nextSwatchColor: () => {
    set((state: ColorStore) => ({
      ...state,
      ...actions.getNextSwatchColor(get()),
    }))
  },
  mixColor: (
    colorGroupId: string,
    subtractedColorId: string,
    swatchColorId: string,
  ): void => {
    const response = actions.mixColor(
      colorGroupId,
      subtractedColorId,
      swatchColorId,
    )
    // TODO: Implement response handling
    // if OK => get().nextSwatchColor()
    // if KO => Lose!
  },
  generateColors: () => {
    set((state: ColorStore) => ({
      ...state,
      colors: actions.generateColors(get()),
    }))
    get().extractSwatchColors()
  },
})
