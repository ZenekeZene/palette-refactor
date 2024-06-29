import { useNavigate } from 'react-router-dom'
import { HeaderGame } from '@frontend/ui/components/HeaderGame/HeaderGame'
import { Bonus } from '@frontend/ui/components/Bonus/Bonus'
import { GameChip } from '@frontend/ui/components/GameChip/GameChip'
import { useStore } from '@frontend/adapter/store/store'
import { useShallow } from 'zustand/react/shallow'
import './Game.scss'

const GameView = () => {
  const navigate = useNavigate()
  const gameSession = useStore(
    useShallow(({ gameSession }) => {
      return { ...gameSession.toPrimitive() }
    })
  )

  return (
    <article className="game view">
      <HeaderGame
        level={gameSession.level}
        lives={gameSession.lives}
        score={gameSession.score}
        onBack={() => navigate('/')}
      />

      <div className="game__divider"></div>

      <section className="game__footer">
        <div className="game__chip">
          <GameChip />
        </div>

        {gameSession.bonus > 0 && (
          <div className="game__bonus">
            <Bonus bonus={gameSession.bonus} />
          </div>
        )}
      </section>
    </article>
  )
}

export { GameView }
