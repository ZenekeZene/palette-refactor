import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import { useShallow } from 'zustand/react/shallow'
import { Progression } from '@frontend/ui/components/Progression/Progression'
import { useStore } from '@frontend/adapter/store/useStore'
import { LocationDisplay } from '@frontend/ui/components/LocationDisplay/LocationDisplay'
import { NextLevel, Header, Subtitle, Title, Next } from './NextLevel.styled'

const NextLevelView = () => {
  const state = useStore(
    useShallow(({ player, levels, quote, nextLevel }) => ({
      levels,
      quote,
      nextLevel,
      levelIndex: player.levelIndex,
      totalLevels: levels.totalLevels,
    })),
  )

  return (
    <NextLevel className="view">
      <Header>
        {state.quote && (
          <>
            <Title>”{state.quote.text}”</Title>
            <Subtitle>—{state.quote.author}—</Subtitle>
          </>
        )}
        <Link
          to="/game"
          className="next-level__play button --square"
          aria-label="Next level"
        >
          <FaPlay />
        </Link>
      </Header>
      <Next onClick={() => state.nextLevel()}>Next</Next>
      <Progression
        currentLevel={state.levelIndex}
        totalLevels={state.totalLevels}
      />
      <LocationDisplay />
    </NextLevel>
  )
}

export { NextLevelView }
