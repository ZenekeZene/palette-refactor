import { Wrapper } from './ColorChip.styled'

export const ColorChip = ({ color }: { color: string }) => {
  return (
    <Wrapper
      className="color-dropzone"
      style={{ backgroundColor: color }}
    ></Wrapper>
  )
}
