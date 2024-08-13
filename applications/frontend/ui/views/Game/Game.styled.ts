import { styled } from 'styled-components'

export const GameWrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Divider = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 0.1rem;
  background-color: var(--cream-color);
`
