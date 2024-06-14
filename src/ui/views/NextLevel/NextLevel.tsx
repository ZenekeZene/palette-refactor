import { Link } from "react-router-dom"
import { FaPlay } from "react-icons/fa"
import { useShallow } from "zustand/react/shallow"
import { Progression } from "@/ui/components/Progression/Progression"
import { useStore } from "@/adapter/store/store"
import { LocationDisplay } from "@/ui/components/LocationDisplay/LocationDisplay";
import "./NextLevel.scss"

const NextLevelView = () => {
	const state = useStore(
    useShallow(({ currentLevel, table, quote }) => ({
      currentLevel,
      totalLevels: table.getNumberOfLevels(),
      quote,
    })))

	return (
		<article className="next-level view">
      { state.quote && (<>
        <h1 className="next-level__title">”{state.quote.text}”</h1>
        <h2 className="next-level__subtitle">—{state.quote.author}—</h2>
      </>)}
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
