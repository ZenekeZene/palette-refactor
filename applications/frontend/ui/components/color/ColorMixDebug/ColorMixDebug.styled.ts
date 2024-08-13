import { styled } from 'styled-components'

export const Wrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translate(31%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Colors = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const Color = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
`
