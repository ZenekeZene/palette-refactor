import styled from 'styled-components'

export const Chip = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transform: scale(0.8);
  will-change: transform;
  transition: transform 1.25s;

  &.color-dropzone-animated {
    transform: scale(1);
  }

  &.color-dropzone.drop-target {
    transform: scale(1.3);
    will-change: transform;
    transition: transform 0.25s;
  }
`
