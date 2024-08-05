import { styled } from 'styled-components'

export const GameWrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const Footer = styled.section`
  position: relative;
  bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const BonusWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0.5rem;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
`

export const Swatch = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  font-size: 2rem;
  box-shadow: var(--box-shadow);
  border-radius: 50%;
`
