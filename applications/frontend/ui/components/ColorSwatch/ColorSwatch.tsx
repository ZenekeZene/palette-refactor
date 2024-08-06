import { useRef } from 'react'
import { SwatchWrapper, Swatch } from './ColorSwatch.styled'
import { useDraggable } from '@frontend/ui/hooks/useDraggable/useDraggable'
import { Dragger } from '@frontend/ui/services/Dragger'
import { useDropzone } from '@frontend/ui/hooks/useDropzone/useDropzone'

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
    <>
      <SwatchWrapper></SwatchWrapper>
      <Swatch
        ref={targetElementRef}
        className="color-draggable"
        style={{ backgroundColor: color }}
        onClick={onClick}
      ></Swatch>
    </>
  )
}
