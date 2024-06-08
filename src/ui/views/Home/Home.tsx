import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Title } from "@/ui/components/Title/Title";
import { useClassnameOfRoute } from '@/ui/hooks/useClassnameOfRoute/useClassnameOfRoute';
import "./Home.scss";

const HomeView = () => {
  useClassnameOfRoute();
  return (
    <article className="home">
      <Title />
      <img className="home__illustration" src="/pet.png" alt="Illustration" />
      <section className="home__buttons">
        <Link className="button button--play"
          to="/game"
        >
          <FaPlay />Jugar
        </Link>
        <Link className="button button--ranking"
          to="/ranking"
        >
          <FaStar />Ranking
        </Link>
      </section>
    </article>
  );
};

export { HomeView };
