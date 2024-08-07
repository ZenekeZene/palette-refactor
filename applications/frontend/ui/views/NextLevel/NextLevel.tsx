import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import { useShallow } from 'zustand/react/shallow'
import { Progression } from '@frontend/ui/components/Progression/Progression'
import { useStore } from '@frontend/adapter/store/useStore'
import { LocationDisplay } from '@frontend/ui/components/LocationDisplay/LocationDisplay'
import { NextLevel, Header, Subtitle, Title, Next } from './NextLevel.styled'
import type { PlayerStore } from '@frontend/adapter/store/slices/playerStore/playerStore.d'
import type { QuoteStore } from '@frontend/adapter/store/slices/quoteStore/quoteStore.d'

const NextLevelView = () => {
  const state = useStore(
    useShallow(({ player, levels, nextLevel }: PlayerStore) => ({
      levels,
      nextLevel,
      levelIndex: player.levelIndex,
      totalLevels: levels.totalLevels,
    })),
  )

  const quote = useStore((state: QuoteStore) => state.quote)

  return (
    <NextLevel className="view">
      <Header>
        {quote && (
          <>
            <Title>”{quote.text}”</Title>
            <Subtitle>—{quote.author}—</Subtitle>
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
