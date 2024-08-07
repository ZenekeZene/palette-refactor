import type { Color } from '@frontend/adapter/store/types/store'
import { ColorChip } from '../ColorChip/ColorChip'
import { Row } from './ColorRow.styled'

export const ColorsRow = ({ colors }: { colors: Color[] }) => {
  return (
    <Row>
      {colors.map((color, index) => (
        <ColorChip key={index} color={color}></ColorChip>
      ))}
    </Row>
  )
}
