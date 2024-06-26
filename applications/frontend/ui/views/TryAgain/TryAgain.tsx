import { Link } from 'react-router-dom'
import { MdOutlineReplay as ReplayIcon } from 'react-icons/md'
import { useShallow } from 'zustand/react/shallow'
import { Progression } from '@frontend/ui/components/Progression/Progression'
import { LocationDisplay } from '@frontend/ui/components/LocationDisplay/LocationDisplay'
import { useStore } from '@frontend/adapter/store/store'
import './TryAgain.scss'

const TryAgainView = () => {
  const state = useStore(
    useShallow(({ player, levels }) => ({
      level: player.toPrimitive().level,
      totalLevels: levels.getNumberOfLevels(),
    }))
  )

  return (
    <article className="try-again view">
      <h2 className="try-again__subtitle">You almost got in</h2>
      <h1 className="try-again__title">Try Again</h1>
      <Link
        to="/game"
        className="try-again__replay button --square"
        aria-label="Replay the level"
      >
        <ReplayIcon />
      </Link>
      <Progression currentLevel={state.level} totalLevels={state.totalLevels} />
      <LocationDisplay />
    </article>
  )
}

export { TryAgainView }
