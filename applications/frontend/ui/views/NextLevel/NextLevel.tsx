import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import { useShallow } from 'zustand/react/shallow'
import { Progression } from '@frontend/ui/components/Progression/Progression'
import { useStore } from '@frontend/adapter/store/useStore'
import { LocationDisplay } from '@frontend/ui/components/LocationDisplay/LocationDisplay'
import './NextLevel.scss'

const NextLevelView = () => {
  const state = useStore(
    useShallow(({ player, levels, quote, nextLevel }) => ({
      level: player.level,
      totalLevels: levels.totalLevels,
      quote,
      nextLevel,
    }))
  )

  return (
    <article className="next-level view">
      <header className="next-level__header">
        {state.quote && (
          <>
            <h1 className="next-level__title">”{state.quote.text}”</h1>
            <h2 className="next-level__subtitle">—{state.quote.author}—</h2>
          </>
        )}
        <Link
          to="/game"
          className="next-level__play button --square"
          aria-label="Next level"
        >
          <FaPlay />
        </Link>
      </header>
      <button onClick={() => state.nextLevel()} className="next-level__next">
        Next
      </button>
      <Progression currentLevel={state.level} totalLevels={state.totalLevels} />
      <LocationDisplay />
    </article>
  )
}

export { NextLevelView }
