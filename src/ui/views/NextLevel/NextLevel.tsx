import { Link } from "react-router-dom"
import { FaPlay } from "react-icons/fa"
import { useShallow } from "zustand/react/shallow"
import { Progression } from "@/ui/components/Progression/Progression"
import { useStore } from "@/store/store"
import { LocationDisplay } from "@/ui/components/LocationDisplay/LocationDisplay";
import "./NextLevel.scss"

const NextLevelView = () => {
	const state = useStore(
    useShallow(({ currentLevel, levels }) => ({
      currentLevel,
      totalLevels: levels.length,
    })));

	return (
		<article className="next-level view">
      <h1 className="next-level__title">”To be an artist is to believe in life”</h1>
      <h2 className="next-level__subtitle">—HENRY MORE—</h2>
      <Link to="/game" className="next-level__play button --square"
        aria-label="Next level"
      >
        <FaPlay />
      </Link>
      <Progression
        currentLevel={state.currentLevel}
        totalLevels={state.totalLevels}
      />
      <LocationDisplay />
    </article>
	)
}

export { NextLevelView }
