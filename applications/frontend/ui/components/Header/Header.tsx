import { IoChevronBack as IconBack } from 'react-icons/io5'
import { IconHeart } from '../IconHearth/IconHearth'
import {
  HeaderWrapper,
  HeaderBack,
  HeaderLevel,
  HeaderScore,
  HeaderLives,
} from './Header.styled'

interface Props {
  level: number
  score: number
  lives: number
  onBack: () => void
}

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <HeaderBack onClick={props.onBack}>
        <IconBack />
      </HeaderBack>
      <HeaderLevel>
        <span>Level {props.level}</span>
      </HeaderLevel>
      <HeaderScore>
        <span>{props.score}</span>
      </HeaderScore>
      <HeaderLives>
        {props.lives}
        <IconHeart />
      </HeaderLives>
    </HeaderWrapper>
  )
}

export { Header }
