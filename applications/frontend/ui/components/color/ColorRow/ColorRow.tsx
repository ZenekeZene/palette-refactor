import type {
  Color,
  ColorTypeOf,
  Colors,
} from '@frontend/adapter/store/types/store'
import { ColorTypes } from '@frontend/adapter/store/types/store.d'
import { ColorChip } from '../ColorChip/ColorChip'
import { Row } from './ColorRow.styled'

interface Props {
  colors: Colors
  type: ColorTypeOf
}

type ExtractedColor = {
  color: Color
  groupId: string
  status: string
  spy: string
}

const extractColorsByType = (
  type: ColorTypeOf,
  colors: Colors,
): ExtractedColor[] => {
  return colors.items.map((item) => ({
    color: type === ColorTypes.RESULT ? item.resultColor : item.subtractedColor,
    groupId: item.id,
    status: item.status,
    spy: item.spy,
  }))
}

export const ColorsRow = ({ colors, type }: Props) => {
  const colorsOfType = extractColorsByType(type, colors)

  return (
    <Row data-id={colors.id}>
      {colorsOfType.map(({ color, groupId, status, spy }, index) => (
        <div key={index}>
          <ColorChip groupId={groupId} color={color} status={status}>
            {spy}
          </ColorChip>
        </div>
      ))}
    </Row>
  )
}
