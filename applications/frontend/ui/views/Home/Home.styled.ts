import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home = styled.div`
  max-width: 29rem;
  height: 100%;
  margin: 0 auto;
  padding: var(--spacing-double);
  background: linear-gradient(white 0, white 45%, var(--primary-color) 150%);
`

const Illustration = styled.img`
  width: 100%;
  margin-bottom: var(--spacing);
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
`

const Button = styled(Link)`
  display: flex;
  place-items: center;
  justify-content: center;
  gap: var(--spacing);
  padding: var(--spacing);
`

const PlayButton = styled(Button)`
  color: white;
  background-color: var(--primary-color);
`

const RankingButton = styled(Button)`
  color: var(--primary-color);
  background-color: white;
`

export { Home, Illustration, Buttons, Button, PlayButton, RankingButton }
