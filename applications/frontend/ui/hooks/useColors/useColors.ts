import { Colors } from '@gameContext/shared/infrastructure/store/store'
import { useStore } from '@frontend/adapter/store/useStore'
import { useEffect, useState } from 'react'

export const useColors = () => {
  const [indexSwatchColor, setIndexSwatchColor] = useState(0)
  const [colors, setColors] = useState<Colors>()

  const generateColors = useStore((state) => state.generateColors)

  useEffect(() => {
    const loadColors = async () => {
      const colors = await generateColors()
      setColors(colors)
    }

    loadColors()
  }, [])

  const nextColor = () => {
    setIndexSwatchColor((prev) => (prev + 1) % swatchColors!.length)
  }
  const items = colors?.items ?? []
  const resultColors = items.map((color) => color.resultColor)
  const subtractedColors = items.map((color) => color.subtractedColor)
  const swatchColors = items.map((color) => color.swatchColor)

  return {
    colors,
    resultColors,
    subtractedColors,
    swatchColors,
    indexSwatchColor,
    nextColor,
  }
}
