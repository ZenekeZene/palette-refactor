import type { ColorStoreState } from './colorStore.d'

export const initialState: ColorStoreState = {
  indexSwatchColor: 0,
  swatchColor: { id: 'dummy-swatch-color', value: '', type: '' },
  swatchColors: [],
  colors: { id: 'dummy-colors', items: [], levelId: 'dummy-level' },
}
