import { ColorChip } from '../ColorChip/ColorChip'
import { Row } from './ColorRow.styled'

export const ColorsRow = ({ colors }: { colors: string[] }) => {
  return (
    <Row>
      {colors.map((color, index) => (
        <ColorChip key={index} color={color}></ColorChip>
      ))}
    </Row>
  )
}
