import type { Color, Colors } from '../../types/store'

export interface ColorStoreState {
  indexSwatchColor: number
  colors: Colors | undefined
  swatchColors: Color[]
  swatchColor: Color | undefined
}

export interface ColorStoreMethods {
  nextSwatchColor: () => void
  mixColor: (
    groupColorId: string,
    substractedColorId: string,
    swatchColorId: string,
  ) => void
  generateColors: () => void
}

export type ColorStore = ColorStoreState & ColorStoreMethods
