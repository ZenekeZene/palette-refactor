import styled from 'styled-components'

export const Final = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--paper-color);
  text-align: center;
  text-wrap: balance;

  &.view {
    padding-block-start: 4rem;
  }
`

export const Title = styled.h1`
  color: var(--primary-color);
  text-transform: uppercase;
  font-weight: 1000;
`

export const Subtitle = styled.h2`
  color: rgb(62 62 62);
  line-height: 1.1;
  margin-bottom: var(--spacing);
`

export const Share = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, 50%);
  width: max-content;
  display: inline-block;
  padding: var(--spacing-half);
  color: white;
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
`

export const Score = styled.div`
  color: var(--primary-color);
`

export const Level = styled.div`
  position: relative;
`

export const LevelScore = styled.div`
  width: 100%;
  padding: 4rem 0 7rem;
  font-size: 6rem;
  font-weight: 1000;
  color: var(--primary-color);
`

export const Laurel = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`

export const Illustration = styled.img`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  width: 80%;
  transform: translate(-50%, 0);
`
