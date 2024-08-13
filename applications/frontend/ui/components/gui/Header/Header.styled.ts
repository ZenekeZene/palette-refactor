import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing);
  font-weight: 800;
  text-transform: uppercase;

  & > div {
    padding: 0.5rem;
  }
`

export const HeaderBack = styled.div`
  font-size: 1.3rem;
  line-height: 1;
  cursor: pointer;
`

export const HeaderLevel = styled.div`
  color: var(--cream-color);
`

export const HeaderScore = styled.div`
  color: var(--primary-color);
`

export const HeaderLives = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: var(--accent-color);
`
