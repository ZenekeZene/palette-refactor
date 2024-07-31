import { Colors } from '@gameContext/shared/infrastructure/store/store'
import './ColorMixDebug.scss'

type ColorMixDebugProps = Omit<Colors, 'levelId'>

export const ColorMixDebug = ({ items }: ColorMixDebugProps) => {
  return (
    <section className="color-mix-debug">
      {items.map((item) => (
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
