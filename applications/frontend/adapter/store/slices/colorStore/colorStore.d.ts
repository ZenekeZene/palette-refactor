import type { Color, Colors } from '../../types/store'

export interface ColorStoreState {
  indexSwatchColor: number
  colors: Colors | undefined
  swatchColors: Color[]
  swatchColor: Color | undefined
}

export interface ColorStoreMethods {
  extractSwatchColors: () => void
  nextSwatchColor: () => void
  mixColor: (groupColorId: string, swatchColorId: string) => void
  successColor: (colorGroupId: string) => void
  failColor: () => void
  generateColors: () => void
}

export type ColorStore = ColorStoreState & ColorStoreMethods
