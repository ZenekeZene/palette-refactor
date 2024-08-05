import { FaPlay } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { Title } from '@frontend/ui/components/Title/Title'
import { useClassnameOfRoute } from '@frontend/ui/hooks/useClassnameOfRoute/useClassnameOfRoute'
import { useStore } from '@frontend/adapter/store/useStore'
import {
  Home,
  Illustration,
  Buttons,
  PlayButton,
  RankingButton,
} from './Home.styled'

const HomeView = () => {
  useClassnameOfRoute()
  const tutorialIsWatched = useStore((state) => state.tutorialIsWatched)

  return (
    <Home>
      <Title />
      <Illustration src="/pet.png" alt="Illustration" />
      <Buttons>
        <PlayButton to={tutorialIsWatched ? '/game' : '/tutorial'}>
          <FaPlay />
          Jugar
        </PlayButton>
        <RankingButton to="/ranking">
          <FaStar />
          Ranking
        </RankingButton>
      </Buttons>
    </Home>
  )
}

export { HomeView }
