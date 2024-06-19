import { Link } from "react-router-dom"
import { FaPlay } from "react-icons/fa"
import { useShallow } from "zustand/react/shallow"
import { Progression } from "@/ui/components/Progression/Progression"
import { useStore } from "@/adapter/store/store"
import { LocationDisplay } from "@/ui/components/LocationDisplay/LocationDisplay";
import "./NextLevel.scss"

const NextLevelView = () => {
	const state = useStore(
    useShallow(({ gameSession, table, quote, nextLevel }) => ({
      level: gameSession.toPrimitive().level,
      totalLevels: table.getNumberOfLevels(),
      quote,
      nextLevel,
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
      <button onClick={() => state.nextLevel()} className="game__next">Next</button>
      <Progression
        currentLevel={state.level}
        totalLevels={state.totalLevels}
      />
      <LocationDisplay />
    </article>
	)
}

export { NextLevelView }
