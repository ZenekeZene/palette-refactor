import { Color } from '@frontend/adapter/store/types/store'
import { useIsCorrectColorById } from '@frontend/ui/hooks/useIsCorrectColorById/useIsCorrectColorById'
import { Chip } from './ColorChip.styled'
import { useDelayedClassname } from '@frontend/ui/hooks/useDelayedClassname/useDelayedClassname'

interface Props {
  id: string
  color: Color
}

export const ColorChip = ({ id, color }: Props) => {
  const { isCorrect, isEnable } = useIsCorrectColorById({ id })

  const { classname } = useDelayedClassname({
    initialClassname: 'color-dropzone',
    delayedClassname: 'color-dropzone-animated',
  })

  return (
    <Chip
      $isCorrect={isCorrect}
      $isFailed={!isCorrect && isEnable}
      className={classname}
      style={{ backgroundColor: color.value }}
      data-group-id={id}
      data-id={color.id}
    ></Chip>
  )
}
