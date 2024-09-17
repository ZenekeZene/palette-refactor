import styled from 'styled-components'

export const ProgressionWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
`

export const Text = styled.p`
  color: var(--primary-color);
`

export const Percent = styled.span`
  font-weight: 700;
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  padding: 0.5rem;
`

export const Item = styled.li<{ $completed?: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--primary-color);
  opacity: ${(props) => `${props.$completed ? '1' : '0.5'}`};
`
