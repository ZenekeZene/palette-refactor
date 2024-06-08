import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Title } from "@/ui/components/Title/Title";
import { useClassnameOfRoute } from '@/ui/hooks/useClassnameOfRoute/useClassnameOfRoute';
import { useStore } from "@/store/store";
import "./Home.scss";

const HomeView = () => {
  useClassnameOfRoute()
  const count = useStore(state => state.lives)
  const increment = useStore(state => state.incrementLive)
  const tutorialIsWatched = useStore(state => state.tutorialIsWatched)

  return (
    <article className="home">
      <Title />
      <img className="home__illustration" src="/pet.png" alt="Illustration" />
      <section className="home__buttons">
        <Link className="button button--play"
          to={tutorialIsWatched ? "/game" : "/tutorial"}
        >
          <FaPlay />Jugar
        </Link>
        <Link className="button button--ranking"
          to="/ranking"
        >
          <FaStar />Ranking
        </Link>
        <p onClick={() => increment()}>{count}</p>
      </section>
    </article>
  );
};

export { HomeView }
