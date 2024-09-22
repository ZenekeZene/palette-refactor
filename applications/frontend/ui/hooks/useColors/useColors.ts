import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import type {
  ColorStoreMethods,
  ColorStoreState,
} from '@frontend/adapter/store/slices/colorStore/colorStore.d'
import { useStore } from '@frontend/adapter/store/useStore'

export const useColors = () => {
  const state = useStore((state: ColorStoreState) => state)

  const methods = useStore(
    useShallow(({ generateColors, mixColor }: ColorStoreMethods) => ({
      generateColors,
      mixColor,
    })),
  )

  useEffect(() => {
    methods.generateColors()
  }, [methods])

  const swatchColor = state.swatchColors[state.indexSwatchColor]

  return {
    colors: state.colors,
    swatchColor,
    mixColor: methods.mixColor,
  }
}
