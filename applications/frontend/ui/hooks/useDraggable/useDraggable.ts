import { useCallback, useEffect, useState } from 'react'
import type { DragEvent } from '@interactjs/types'
import { DraggerType } from '@frontend/ui/services/Dragger'

interface useDraggableProps {
  targetElement: HTMLElement | null
  dragService: DraggerType
  onDragEnd: (relatedTarget: Element | null) => void
}

export const useDraggable = ({
  dragService,
  onDragEnd = () => {},
}: useDraggableProps) => {
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null)

  const dragMoveListener = useCallback(
    (event: DragEvent) => {
      if (!targetElement) return
      const delta = { x: event.dx, y: event.dy }
      const dataX = targetElement.getAttribute('data-x') || '0'
      const dataY = targetElement.getAttribute('data-y') || '0'
      const x = parseFloat(dataX) + delta.x
      const y = parseFloat(dataY) + delta.y

      targetElement.style.transform = `translate(${x}px, ${y}px)`

      targetElement.setAttribute('data-x', x.toString())
      targetElement.setAttribute('data-y', y.toString())
    },
    [targetElement],
  )

  const dragEndListener = useCallback(() => {
    if (!targetElement) return
    targetElement.style.transform = `translate(${0}px, ${0}px)`
  }, [targetElement])

  useEffect(() => {
    if (!targetElement) return

    const listeners = {
      start: () => {
        targetElement.setAttribute('data-x', '0')
        targetElement.setAttribute('data-y', '0')
        targetElement.classList.add('dragging')
      },
      move: (event: DragEvent) => {
        dragMoveListener(event)
      },
      end: (event: DragEvent) => {
        dragEndListener()
        targetElement.classList.remove('dragging')
        const relatedTarget = event.relatedTarget
        onDragEnd(relatedTarget)
      },
    }

    const dragConfig = {
      targetElement,
      ...listeners,
    }

    const { unset } = dragService(dragConfig).init()

    return () => {
      unset()
    }
  }, [targetElement, dragService, dragEndListener, dragMoveListener, onDragEnd])

  return { setTargetElement }
}
