import { ColorGroup } from '@gameContext/shared/infrastructure/store/store'
import { Wrapper, Colors, Color } from './ColorMixDebug.styled'

export const ColorMixDebug = ({ colors }: { colors: ColorGroup[] }) => {
  return (
    <Wrapper>
      {colors.map((item) => (
        <Colors key={item.id}>
          <Color
            className="color-mix-debug__color"
            style={{ backgroundColor: item?.swatchColor }}
          ></Color>
          +{' '}
          <Color
            className="color-mix-debug__color"
            style={{ backgroundColor: item.subtractedColor }}
          ></Color>
          ={' '}
          <Color
            className="color-mix-debug__color"
            style={{ backgroundColor: item.resultColor }}
          ></Color>
        </Colors>
      ))}
    </Wrapper>
  )
}
