import { useRef } from 'react'
import { useDraggable } from '@frontend/ui/hooks/useDraggable/useDraggable'
import { Dragger } from '@frontend/ui/services/Dragger'
import { useDropzone } from '@frontend/ui/hooks/useDropzone/useDropzone'
import { Color } from '@frontend/adapter/store/types/store'
import { SwatchWrapper, Swatch } from './ColorSwatch.styled'

export type SubtractedColorReached = Element | null

interface ColorSwatchProps {
  color: Color
  onClick: () => void
  onDragEnd: (relatedTarget: SubtractedColorReached) => void
}

export const ColorSwatch = ({
  color,
  onClick,
  onDragEnd,
}: ColorSwatchProps) => {
  const targetElementRef = useRef<HTMLDivElement>(null)

  useDraggable({
    targetElement: targetElementRef?.current,
    dragService: Dragger,
    onDragEnd,
  })

  useDropzone({
    targetElementCSSSelector: '.color-dropzone',
    relatedTargetCSSSelector: '.color-draggable',
  })

  return (
    <>
      <SwatchWrapper></SwatchWrapper>
      <Swatch
        ref={targetElementRef}
        className="color-draggable"
        style={{ backgroundColor: color.value }}
        onClick={onClick}
      ></Swatch>
    </>
  )
}
