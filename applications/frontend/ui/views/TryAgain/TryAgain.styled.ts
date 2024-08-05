import styled from 'styled-components'

const TryAgain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  text-align: center;
  text-wrap: balance;
  background-color: var(--paper-color);
`

const Subtitle = styled.div`
  color: hsl(40, 17%, 79%);
  font-size: 1.2rem;
`

const Title = styled.div`
  color: var(--primary-color);
  text-transform: uppercase;
  font-weight: 1000;
`

export { TryAgain, Subtitle, Title }
