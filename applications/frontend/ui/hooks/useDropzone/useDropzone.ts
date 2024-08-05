import interact from 'interactjs'
import { useEffect } from 'react'

interface Props {
  targetElementCSSSelector: string
  relatedTargetCSSSelector: string
}

export const useDropzone = ({
  targetElementCSSSelector,
  relatedTargetCSSSelector,
}: Props) => {
  useEffect(() => {
    interact(targetElementCSSSelector).dropzone({
      accept: relatedTargetCSSSelector,
      ondrop: (event) => {
        const draggableElement = event.relatedTarget
        const dropzoneElement = event.target

        const dropzoneRect = dropzoneElement.getBoundingClientRect()
        const draggableRect = draggableElement.getBoundingClientRect()

        const x = dropzoneRect.left - draggableRect.left
        const y = dropzoneRect.top - draggableRect.top

        draggableElement.style.transform = `translate(${x}px, ${y}px)`
      },
    })
  }, [])
}
