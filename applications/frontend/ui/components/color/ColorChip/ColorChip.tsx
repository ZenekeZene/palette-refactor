import { useEffect, useRef } from 'react'
import { Color } from '@frontend/adapter/store/types/store'
import { Chip } from './ColorChip.styled'

export const ColorChip = ({ id, color }: { id: string; color: Color }) => {
  const chipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chipRef.current) return
    setTimeout(() => {
      chipRef.current?.classList.add('color-dropzone-animated')
    }, 100)
  }, [])

  return (
    <Chip
      ref={chipRef}
      className="color-dropzone"
      style={{ backgroundColor: color.value }}
      data-group-id={id}
      data-id={color.id}
    ></Chip>
  )
}
