import interact from 'interactjs'
import { useEffect } from 'react'

interface Props {
  targetElementCSSSelector: string
  relatedTargetCSSSelector: string
}

function offset(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return { top: rect.top, left: rect.left }
}

export const useDropzone = ({
  targetElementCSSSelector,
  relatedTargetCSSSelector,
}: Props) => {
  useEffect(() => {
    const origin = {
      x: 0,
      y: 0,
    }
    interact(targetElementCSSSelector).dropzone({
      accept: relatedTargetCSSSelector,
      ondropactivate: function (event) {
        // add active dropzone feedback
        const rect = offset(event.relatedTarget)
        origin.x = rect.left
        origin.y = rect.top
      },
      ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
      },
      ondragenter: function (event) {
        const dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
      },
    })
  }, [])
}
