import './ColorChip.scss'

export const ColorChip = ({ color }: { color: string }) => {
  return <div className="color-chip" style={{ backgroundColor: color }}></div>
}
