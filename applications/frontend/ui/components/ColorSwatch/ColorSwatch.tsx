import './ColorSwatch.scss'

interface ColorSwatchProps {
  color: string
  onClick: () => void
}

export const ColorSwatch = ({ color, onClick }: ColorSwatchProps) => {
  return (
    <div
      className="color-swatch"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  )
}
