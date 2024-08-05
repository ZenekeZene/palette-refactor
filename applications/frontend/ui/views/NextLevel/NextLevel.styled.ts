import styled from 'styled-components'

const NextLevel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  text-align: center;
  text-wrap: balance;
  background-color: var(--paper-color);
`

const Header = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
`

const Subtitle = styled.div`
  margin-block-end: var(--spacing);
  color: hsl(40, 17%, 79%);
  font-size: 1.2rem;
  text-wrap: balance;
`

const Title = styled.div`
  margin-block-end: 0;
  padding: 0 2rem;
  color: var(--primary-color);
  text-transform: uppercase;
  font-weight: 700;
  font-style: italic;
  text-wrap: balance;
`

const Next = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`

export { NextLevel, Header, Subtitle, Title, Next }
