import type { Color, Colors } from '../../types/store'

export interface ColorStoreState {
  indexSwatchColor: number
  resultColors: Color[]
  subtractedColors: Color[]
  swatchColors: Color[]
  colors: Colors | undefined
}

export interface ColorStoreMethods {
  updateAllColors: () => void
  nextSwatchColor: () => void
  mixColor: (color1: Color, color2: Color) => Color
  generateColors: () => void
}

export type ColorStore = ColorStoreState & ColorStoreMethods
