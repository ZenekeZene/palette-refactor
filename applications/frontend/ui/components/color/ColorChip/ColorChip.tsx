import {
  ColorStatusTypes,
  type Color,
  type ColorStatusType,
} from '@frontend/adapter/store/types/store.d'
import { useIsCorrectColorById } from '@frontend/ui/hooks/useIsCorrectColorById/useIsCorrectColorById'
import { useDelayedClassname } from '@frontend/ui/hooks/useDelayedClassname/useDelayedClassname'
import { ChipWrapper, Chip, MixedChip } from './ColorChip.styled'

interface Props {
  groupId: string
  color: Color
  status: ColorStatusType
}

export const ColorChip = ({ groupId, color, status }: Props) => {
  const correctColorById = useIsCorrectColorById({ id: groupId })
  const { isCorrect, isFailureEnable } = correctColorById

  const { classname } = useDelayedClassname({
    initialClassname: 'color-dropzone',
    delayedClassname: 'color-dropzone-animated',
  })

  const isFailed = status === ColorStatusTypes.FAIL
  const isMixed = status === ColorStatusTypes.MIXED

  const props = {
    className: classname,
    'data-group-id': groupId,
    'data-id': color.id,
    $isFailed: isFailed,
    $isCorrectWhenFailed: isCorrect && isFailureEnable,
  }

  return (
    <ChipWrapper>
      {isMixed && <MixedChip {...props} />}
      <Chip style={{ backgroundColor: color.value }} {...props}></Chip>
    </ChipWrapper>
  )
}
