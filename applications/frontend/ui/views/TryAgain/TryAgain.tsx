import { Link } from 'react-router-dom'
import { MdOutlineReplay as ReplayIcon } from 'react-icons/md'
import { useShallow } from 'zustand/react/shallow'
import { Progression } from '@frontend/ui/components/Progression/Progression'
import { LocationDisplay } from '@frontend/ui/components/LocationDisplay/LocationDisplay'
import { useStore } from '@frontend/adapter/store/useStore'
import { TryAgain, Subtitle, Title } from './TryAgain.styled'

const TryAgainView = () => {
  const state = useStore(
    useShallow(({ player, levels }) => ({
      levelIndex: player.levelIndex,
      totalLevels: levels.totalLevels,
    })),
  )

  return (
    <TryAgain className="view">
      <Subtitle>You almost got in</Subtitle>
      <Title>Try Again</Title>
      <Link
        to="/game"
        className="try-again__replay button --square"
        aria-label="Replay the level"
      >
        <ReplayIcon />
      </Link>
      <Progression
        currentLevel={state.levelIndex}
        totalLevels={state.totalLevels}
      />
      <LocationDisplay />
    </TryAgain>
  )
}

export { TryAgainView }
