import { ColorChip } from '../ColorChip/ColorChip'
import './ColorRow.scss'

export const ColorsRow = ({ colors }: { colors: string[] }) => {
  return (
    <div className="colors-row">
      {colors.map((color, index) => (
        <ColorChip key={index} color={color}></ColorChip>
      ))}
    </div>
  )
}
