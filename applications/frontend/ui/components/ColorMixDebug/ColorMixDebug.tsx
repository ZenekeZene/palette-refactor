import { useState } from 'react'
// TODO: change this import to use an action using a usecase of domain
// to generate random colors
import { Color } from '@gameContext/color/domain/models/Color'
import { Color as ColorType } from '@frontend/adapter/store/types/store'
import './ColorMixDebug.scss'

interface ColorMixDebugProps {
  mixColor: (color1: ColorType, color2: ColorType) => ColorType
}

interface ColorGroup {
  color1: ColorType
  color2: ColorType
  mixedColor: ColorType
}

export const ColorMixDebug = ({ mixColor }: ColorMixDebugProps) => {
  const [color, setColor] = useState<ColorGroup>()

  const handleMixColor = () => {
    // TODO: change this to use an action using a usecase of domain
    const color1 = { value: Color.random().valueOf() } as ColorType
    const color2 = { value: Color.random().valueOf() } as ColorType
    const mixedColor = mixColor(color1, color2)
    setColor({
      color1,
      color2,
      mixedColor,
    })
  }

  return (
    <button onClick={handleMixColor} className="color-mix-debug">
      Mix colors
      {color?.mixedColor.value && (
        <div className="color-mix-debug__colors">
          <span
            className="color-mix-debug__color"
            style={{ backgroundColor: color?.color1.value }}
            aria-label={color?.color1.value}
          ></span>
          +{' '}
          <span
            className="color-mix-debug__color"
            style={{ backgroundColor: color?.color2.value }}
            aria-label={color?.color2.value}
          ></span>
          ={' '}
          <span
            className="color-mix-debug__color"
            style={{ backgroundColor: color?.mixedColor.value }}
            aria-label={color?.mixedColor.value}
          ></span>
        </div>
      )}
    </button>
  )
}
