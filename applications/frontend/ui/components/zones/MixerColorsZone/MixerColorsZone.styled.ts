import { styled } from 'styled-components'

export const DraggableZone = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  padding: 1rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Footer = styled.section`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: flex-end;
`

export const BonusWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
`
