import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { Title } from '@frontend/ui/components/Title/Title'
import { useClassnameOfRoute } from '@frontend/ui/hooks/useClassnameOfRoute/useClassnameOfRoute'
import { useStore } from '@frontend/adapter/store/store'
import './Home.scss'

const HomeView = () => {
  useClassnameOfRoute()
  const tutorialIsWatched = useStore((state) => state.tutorialIsWatched)

  return (
    <article className="home">
      <Title />
      <img className="home__illustration" src="/pet.png" alt="Illustration" />
      <section className="home__buttons">
        <Link
          className="button button--play"
          to={tutorialIsWatched ? '/game' : '/tutorial'}
        >
          <FaPlay />
          Jugar
        </Link>
        <Link className="button button--ranking" to="/ranking">
          <FaStar />
          Ranking
        </Link>
      </section>
    </article>
  )
}

export { HomeView }
