import { Colors } from '@frontend/adapter/store/types/store'
import './ColorMixDebug.scss'

interface ColorMixDebugProps {
  colors: Colors
}

export const ColorMixDebug = ({ colors }: ColorMixDebugProps) => {
  return (
    <section className="color-mix-debug">
      {colors.items.map((item) => (
        <div className="color-mix-debug__colors" key={item.id}>
          <span
            className="color-mix-debug__color"
            style={{ backgroundColor: item?.swatchColor }}
          ></span>
          +{' '}
          <span
            className="color-mix-debug__color"
            style={{ backgroundColor: item.subtractedColor }}
          ></span>
          ={' '}
          <span
            className="color-mix-debug__color"
            style={{ backgroundColor: item.resultColor }}
          ></span>
        </div>
      ))}
    </section>
  )
}
