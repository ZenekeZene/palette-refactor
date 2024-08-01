import { useRef } from 'react'
import { Dragger } from '@frontend/ui/services/Dragger'
import { useDraggable } from '@frontend/ui/hooks/useDraggable/useDraggable'
import './ColorSwatch.scss'

interface ColorSwatchProps {
  color: string
  onClick: () => void
}

export const ColorSwatch = ({ color, onClick }: ColorSwatchProps) => {
  const targetElementRef = useRef<HTMLDivElement>(null)

  useDraggable({
    targetElement: targetElementRef?.current,
    dragService: Dragger,
  })

  return (
    <div
      ref={targetElementRef}
      className="color-swatch"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  )
}
