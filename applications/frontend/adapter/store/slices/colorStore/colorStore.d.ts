import type { Color, ColorGroup, Colors } from '../../types/store'

export interface ColorStoreState {
  indexSwatchColor: number
  colors: Colors
  swatchColors: Color[]
  swatchColor: Color
}

export interface ColorStoreMethods {
  extractSwatchColors: () => void
  nextSwatchColor: (colorGroupMixed: ColorGroup) => void
  mixColor: (groupColorId: string, swatchColorId: string) => void
  successColor: (colorGroupId: string) => void
  failColor: () => void
  generateColors: () => void
}

export type ColorStore = ColorStoreState & ColorStoreMethods
