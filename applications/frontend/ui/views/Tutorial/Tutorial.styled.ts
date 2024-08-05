import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const touchTutorial = keyframes`
  0%,
  10% {
    opacity: 0;
  }

  20%,
  45% {
    opacity: 1;
  }

  55% {
    opacity: 0;
  }
`

const dropTutorial = keyframes`
  0% {
    bottom: 0;
    opacity: 0;
  }

  10%,
  15% {
    bottom: 0;
    opacity: 1;
  }

  45%,
  55% {
    bottom: 21vh;
    opacity: 1;
  }

  75%,
  100% {
    bottom: 21vh;
    opacity: 0;
  }
`

const colorTutorial = keyframes`
  0% {
    bottom: 0;
    background-color: rgb(253, 208, 0);
    opacity: 0;
  }

  15% {
    bottom: 0;
    background-color: rgb(253, 208, 0);
    opacity: 1;
  }

  45% {
    background-color: rgb(253, 208, 0);
    opacity: 1;
  }

  46%,
  80% {
    background-color: rgb(57, 102, 42);
    opacity: 1;
  }

  100% {
    background-color: rgb(57, 102, 42);
    opacity: 0;
  }
`

const sampleTutorial = keyframes`
  0% {
    opacity: 0;
  }

  15% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

const swatchTutorial = keyframes`
  0% {
    top: -3vh;
    left: -3vh;
    width: 13vh;
    height: 13vh;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    top: 0;
    left: 0;
    width: 7vh;
    height: 7vh;
    opacity: 0;
  }
`

const activeTutorial = keyframes`
  0% {
    top: calc(var(--spacing) * -1);
    left: calc(var(--spacing) * -1);
    width: 8vh;
    height: 8vh;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    top: calc(-2vh - 12px);
    left: calc(-2vh - 12px);
    width: 12vh;
    height: 12vh;
    opacity: 0;
  }
`

export const Tutorial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--paper-color);
`

export const Title = styled.div`
  font-size: 0.9rem;
  text-align: center;
`

export const Graphic = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 9vh;
    height: 9vh;
    border-radius: 50%;
  }
`

export const Active = styled.div`
  position: relative;
  margin-bottom: 7vh;
  background-color: rgb(0, 133, 196);
  animation: ${dropTutorial} 6s ease-in-out infinite both;

  &:before {
    content: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MCA1MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkRGQ0ZGO30KCS5zdDF7ZmlsbDojQ0ZDQkJGO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuNiwxOC40Yy0xLjgsMC0zLjIsMS40LTMuMiwzLjJWMjBjMC0xLjgtMS40LTMuMi0zLjItMy4yUzI1LDE4LjIsMjUsMjB2LTEuNmMwLTEuOC0xLjQtMy4yLTMuMi0zLjIKCQlzLTMuMiwxLjQtMy4yLDMuMlY0LjdjMC0xLjgtMS40LTMuMi0zLjItMy4ycy0zLjIsMS40LTMuMiwzLjJ2MTcuMXYxLjNsMCw3LjZsLTMuMy03LjRjLTAuNy0xLjgtMi44LTIuOC00LjYtMi4xCgkJYy0xLjksMC43LTIuOCwyLjgtMi4xLDQuNmw2LjYsMTQuMmMyLDUuMiw3LDguNiwxMi42LDguNmgwYzguOSwwLDE2LjEtNy4yLDE2LjEtMTYuMXYtMy43di01LjZ2LTEuNQoJCUMzNy43LDE5LjgsMzYuMywxOC40LDM0LjYsMTguNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNC42LDE3LjFjLTAuOSwwLTEuNywwLjMtMi40LDAuN2MtMC44LTEuNC0yLjItMi4zLTMuOS0yLjNjLTAuOSwwLTEuNywwLjMtMi40LDAuN0MyNSwxNC45LDIzLjYsMTQsMjEuOSwxNAoJCWMtMC43LDAtMS4zLDAuMi0xLjksMC40VjQuN2MwLTIuNC0yLTQuNC00LjQtNC40cy00LjQsMi00LjQsNC40djE3LjFsMCwyLjhsLTAuOC0xLjhjLTEtMi41LTMuOC0zLjctNi4yLTIuOAoJCWMtMS4yLDAuNS0yLjIsMS40LTIuNywyLjZjLTAuNSwxLjItMC42LDIuNS0wLjEsMy43YzAsMCwwLDAsMCwwLjFsNi42LDE0LjFjMi4yLDUuNyw3LjYsOS4zLDEzLjcsOS4zQzMxLjIsNDkuNywzOSw0MiwzOSwzMi40CgkJdi0zLjd2LTUuNnYtMS41QzM5LDE5LjEsMzcsMTcuMSwzNC42LDE3LjF6IE0zNi41LDMyLjRjMCw4LjItNi43LDE0LjgtMTQuOCwxNC44Yy01LjEsMC05LjUtMy0xMS40LTcuOGMwLDAsMC0wLjEsMC0wLjFMMy42LDI1LjIKCQljLTAuMi0wLjYtMC4yLTEuMiwwLjEtMS43YzAuMy0wLjYsMC43LTEsMS4zLTEuMmMxLjItMC40LDIuNSwwLjIsMywxLjRjMCwwLDAsMCwwLDBsMy4zLDcuNGMwLjIsMC41LDAuOCwwLjksMS40LDAuNwoJCWMwLjYtMC4xLDEtMC42LDEtMS4ybDAtNy42VjQuN2MwLTEsMC45LTEuOSwxLjktMS45czEuOSwwLjksMS45LDEuOXYxMy43djMuNHY0LjdjMCwwLjcsMC42LDEuMywxLjMsMS4zYzAuNywwLDEuMy0wLjYsMS4zLTEuMwoJCXYtNC43di0zLjRjMC0xLDAuOS0xLjksMS45LTEuOWMxLDAsMS45LDAuOSwxLjksMS45VjIwdjYuNWMwLDAuNywwLjYsMS4zLDEuMywxLjNjMC43LDAsMS4zLTAuNiwxLjMtMS4zVjIwYzAtMSwwLjktMS45LDEuOS0xLjkKCQljMSwwLDEuOSwwLjksMS45LDEuOXYxLjZ2NC45YzAsMC43LDAuNiwxLjMsMS4zLDEuM3MxLjMtMC42LDEuMy0xLjN2LTQuOWMwLTEsMC45LTEuOSwxLjktMS45czEuOSwwLjksMS45LDEuOXYxLjV2NS42VjMyLjR6Ii8+CjwvZz4KPC9zdmc+');
    position: absolute;
    right: calc(4.5vh - 18px);
    bottom: var(--spacing);
    width: 3rem;
    height: 3rem;
    animation: ${touchTutorial} 6s ease-in-out infinite both;
  }
`

export const Mixer = styled.div`
  position: relative;
  margin-bottom: 12vh;
  background-color: rgb(253, 208, 0);
  animation: ${colorTutorial} 6s ease-in-out infinite both;

  &:after {
    content: 'MIXER';
    position: absolute;
    top: 3vh;
    left: 13vh;
    font-size: 0.7rem;
    font-weight: 700;
  }
`

export const Swatch = styled.div`
  position: relative;
  margin-bottom: 12vh;
  background-color: rgb(57, 102, 42);
  animation: ${sampleTutorial} 6s ease-in-out infinite both;

  &:before {
    content: '';
    position: absolute;
    bottom: -12vh;
    left: calc(4.5vh - 1px);
    width: 2px;
    height: 12vh;
  }

  &:after {
    content: 'SAMPLE';
    position: absolute;
    top: 3vh;
    left: 13vh;
    font-size: 0.7rem;
    font-weight: 700;
  }
`

export const Base = styled.div`
  position: absolute;
  bottom: 7vh;
  z-index: -1;
  width: 11vh;
  height: 11vh;
  transform: scale(1.4);
  background: var(--paper-color);
  border: solid 1rem var(--paper-color);
`

export const Next = styled(Link)`
  position: relative;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  font-size: 1rem;
`
