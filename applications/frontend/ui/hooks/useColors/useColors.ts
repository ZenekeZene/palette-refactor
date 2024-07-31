import { useStore } from '@frontend/adapter/store/useStore'
import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'

export const useColors = () => {
  const state = useStore(
    useShallow((state) => ({
      colors: state.colors,
      resultColors: state.resultColors,
      subtractedColors: state.subtractedColors,
      swatchColors: state.swatchColors,
      indexSwatchColor: state.indexSwatchColor,
    })),
  )

  const methods = useStore(
    useShallow(({ generateColors, nextSwatchColor }) => ({
      generateColors,
      nextSwatchColor,
    })),
  )

  useEffect(() => {
    const loadColors = async () => {
      await methods.generateColors()
    }

    loadColors()
  }, [])

  return {
    colors: state.colors,
    resultColors: state.resultColors,
    subtractedColors: state.subtractedColors,
    swatchColors: state.swatchColors,
    indexSwatchColor: state.indexSwatchColor,
    nextColor: methods.nextSwatchColor,
  }
}
