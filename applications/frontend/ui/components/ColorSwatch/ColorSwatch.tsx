import { useRef } from 'react'
import { Dragger } from '@frontend/ui/services/Dragger'
import { useDraggable } from '@frontend/ui/hooks/useDraggable/useDraggable'
import { useDropzone } from '@frontend/ui/hooks/useDropzone/useDropzone'
import { Swatch } from './ColorSwatch.styled'

interface Props {
  color: string
  onClick: () => void
}

export const ColorSwatch = ({ color, onClick }: Props) => {
  const targetElementRef = useRef<HTMLDivElement>(null)

  useDraggable({
    targetElement: targetElementRef?.current,
    dragService: Dragger,
  })

  useDropzone({
    targetElementCSSSelector: '.color-dropzone',
    relatedTargetCSSSelector: '.color-draggable',
  })

  return (
    <Swatch
      ref={targetElementRef}
      className="color-draggable"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></Swatch>
  )
}
