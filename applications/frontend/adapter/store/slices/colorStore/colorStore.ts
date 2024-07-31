import { StateCreator } from 'zustand'
import type { Store, Color, ColorGroup } from '../../types/store'
import { actions } from '../../actions/actions'
import type { ColorStore } from './colorStore.d'

function extractColors(items: ColorGroup[]) {
  const resultColors = items.map((color: ColorGroup) => color.resultColor)
  const subtractedColors = items.map(
    (color: ColorGroup) => color.subtractedColor,
  )
  const swatchColors = items.map((color: ColorGroup) => color.swatchColor)
  return { resultColors, subtractedColors, swatchColors }
}

const initialState = {
  indexSwatchColor: 0,
  resultColors: [],
  subtractedColors: [],
  swatchColors: [],
  colors: undefined,
}

export const createColorStore: StateCreator<Store, [], [], ColorStore> = (
  set,
  get,
) => ({
  ...initialState,
  updateAllColors: () => {
    const colors = get().colors
    set((state: ColorStore) => ({
      ...state,
      colors,
      ...extractColors(colors.items),
    }))
  },
  nextSwatchColor: () => {
    const prev = get().indexSwatchColor
    const swatchColors = get().swatchColors
    const nextIndexSwatchColor = (prev + 1) % swatchColors!.length
    set((state: ColorStore) => ({
      ...state,
      indexSwatchColor: nextIndexSwatchColor,
    }))
  },
  mixColor: (color1: Color, color2: Color): Color =>
    actions.mixColor(color1, color2),
  generateColors: () => {
    const levels = get().levels
    const level = levels.items[get().player.levelIndex]
    if (!level) {
      throw new Error('Level not found')
    }
    const colors = actions.generateColors(levels.id, level.id)
    console.log(colors)
    set((state: ColorStore) => ({ ...state, colors }))
    get().updateAllColors()
  },
})
