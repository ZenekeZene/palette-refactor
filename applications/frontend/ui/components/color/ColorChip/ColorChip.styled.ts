import styled from 'styled-components'

const animations = {
  correctWhenFailed: 'heartBeat',
  correct: 'bounceIn',
  failed: 'fadeOut',
  default: 'none',
}

interface ChipProps {
  $isCorrectWhenFailed: boolean
  $isFailed: boolean
}

const getAnimationName = (props: ChipProps) => {
  if (props.$isCorrectWhenFailed) return animations.correctWhenFailed
  if (props.$isFailed) return animations.failed
  return animations.default
}

export const ChipWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Chip = styled.div<ChipProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transform: scale(0.8);
  will-change: transform;
  transition: transform 0.25s;
  animation-name: ${(props) => getAnimationName(props)};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  &.color-dropzone-animated {
    transform: scale(0.9);
  }

  &.color-dropzone.drop-target {
    transform: scale(1.3);
    will-change: transform;
    transition: transform 0.25s;
  }
`

export const ChipDebug = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
`

export const MixedChip = styled(Chip)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  animation-name: ${animations.correct};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  transform: scale(1.2);
  box-shadow: 0 7px 29px 0 rgba(100, 100, 111, 0.2) !important;

  &::after {
    content: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOCAxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTggMTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojODBDNEQ2O30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTcsMTQuOWMtMC41LDAtMS0wLjItMS40LTAuNmwtNC4yLTQuMmMtMC44LTAuOC0wLjgtMiwwLTIuOGMwLjgtMC44LDItMC44LDIuOCwwTDcsMTAuMUwxNCwzCgljMC44LTAuOCwyLTAuOCwyLjgsMGMwLjgsMC44LDAuOCwyLDAsMi44bC04LjUsOC41QzgsMTQuNyw3LjUsMTQuOSw3LDE0Ljl6Ii8+Cjwvc3ZnPg==');
    position: absolute;
    top: 0.8rem;
    left: 0.66rem;
    width: 1.6rem;
    height: 1.6rem;
  }
`
