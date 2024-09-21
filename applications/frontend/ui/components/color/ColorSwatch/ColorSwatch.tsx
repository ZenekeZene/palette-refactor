import { useEffect, useRef } from 'react'
import { useDraggable } from '@frontend/ui/hooks/useDraggable/useDraggable'
import { Dragger } from '@frontend/ui/services/Dragger'
import { useDropzone } from '@frontend/ui/hooks/useDropzone/useDropzone'
import { Color } from '@frontend/adapter/store/types/store'
import { SwatchWrapper, Swatch } from './ColorSwatch.styled'

export type SubtractedColorReached = Element | null

interface Props {
  color: Color & { spy?: string }
  onDragEnd: (relatedTarget: SubtractedColorReached) => void
}

export const ColorSwatch = ({ color, onDragEnd }: Props) => {
  const targetElementRef = useRef<HTMLDivElement>(null)

  const { setTargetElement } = useDraggable({
    targetElement: targetElementRef?.current,
    dragService: Dragger,
    onDragEnd,
  })

  useDropzone({
    targetElementCSSSelector: '.color-dropzone',
    relatedTargetCSSSelector: '.color-draggable',
  })

  useEffect(() => {
    if (!targetElementRef.current) return
    setTargetElement(targetElementRef.current)
  }, [targetElementRef, setTargetElement])

  return (
    <>
      <SwatchWrapper></SwatchWrapper>
      <Swatch
        ref={targetElementRef}
        className="color-draggable"
        style={{ backgroundColor: color.value }}
      >
        {color.spy}
      </Swatch>
    </>
  )
}
