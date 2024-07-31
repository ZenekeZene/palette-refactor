import type { Color, Colors } from '../../types/store'

export interface ColorStore {
  indexSwatchColor: number
  resultColors: Color[]
  subtractedColors: Color[]
  swatchColors: Color[]
  colors: Colors | undefined
  updateAllColors: () => void
  nextSwatchColor: () => void
  mixColor: (color1: Color, color2: Color) => Color
  generateColors: () => void
}
