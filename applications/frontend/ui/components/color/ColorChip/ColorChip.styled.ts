import styled from 'styled-components'

const animations = {
  correct: 'heartBeat',
  failed: 'fadeOut',
  default: 'none',
}

const getAnimationName = (props: {
  $isCorrect: boolean
  $isFailed: boolean
}) => {
  if (props.$isCorrect) return animations.correct
  if (props.$isFailed) return animations.failed
  return animations.default
}

export const Chip = styled.div<{ $isCorrect: boolean; $isFailed: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transform: scale(0.8);
  will-change: transform;
  transition: transform 1.25s;
  animation-name: ${(props) => getAnimationName(props)};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  &.color-dropzone-animated {
    transform: scale(1);
  }

  &.color-dropzone.drop-target {
    transform: scale(1.3);
    will-change: transform;
    transition: transform 0.25s;
  }
`
