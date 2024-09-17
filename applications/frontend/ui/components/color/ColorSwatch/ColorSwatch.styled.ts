import styled, { css } from 'styled-components'

const sizeInRem = 4

const commonStyles = css`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  width: ${sizeInRem}rem;
  height: ${sizeInRem}rem;
  margin-left: -${sizeInRem / 2}rem;
  border-radius: 50%;
  box-shadow: var(--box-shadow);
`

export const SwatchWrapper = styled.div`
  ${commonStyles}
  font-size: 2rem;
  transform: scale(1.3);
  z-index: 1;
`

export const Swatch = styled.div`
  ${commonStyles}
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  touch-action: none;
  animation: color-beat 2s ease-in-out infinite;
  z-index: 2;
`
