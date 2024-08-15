import type { ColorTypeOf, Colors } from '@frontend/adapter/store/types/store'
import { ColorTypes } from '@frontend/adapter/store/types/store.d'
import { ColorChip } from '../ColorChip/ColorChip'
import { Row } from './ColorRow.styled'

interface Props {
  colors: Colors
  type: ColorTypeOf
}

const extractColorsByType = (type: ColorTypeOf, colors: Colors) => {
  return colors.items.map((item) => ({
    color: type === ColorTypes.RESULT ? item.resultColor : item.subtractedColor,
    id: item.id,
  }))
}

export const ColorsRow = ({ colors, type }: Props) => {
  const colorsOfType = extractColorsByType(type, colors)

  return (
    <Row data-id={colors.id}>
      {colorsOfType.map(({ color, id }, index) => (
        <div key={index}>
          <ColorChip id={id} color={color}></ColorChip>
        </div>
      ))}
    </Row>
  )
}
