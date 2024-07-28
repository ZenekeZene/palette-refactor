import { useNavigate } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import { HeaderGame } from '@frontend/ui/components/HeaderGame/HeaderGame'
import { Bonus } from '@frontend/ui/components/Bonus/Bonus'
import { GameChip } from '@frontend/ui/components/GameChip/GameChip'
import { useStore } from '@frontend/adapter/store/useStore'
import { ColorMixDebug } from '@frontend/ui/components/ColorMixDebug/ColorMixDebug'
import './Game.scss'

const GameView = () => {
  const navigate = useNavigate()
  const { player, mixColor } = useStore(
    useShallow(({ player, mixColor }) => ({
      player,
      mixColor,
    })),
  )

  return (
    <article className="game view">
      <HeaderGame
        level={player.level}
        lives={player.lives}
        score={player.score}
        onBack={() => navigate('/')}
      />

      <div className="game__divider"></div>

      <section className="game__footer">
        <div className="game__chip">
          <GameChip />
        </div>

        {player.bonus > 0 && (
          <div className="game__bonus">
            <Bonus bonus={player.bonus} />
          </div>
        )}

        <ColorMixDebug mixColor={mixColor} />
      </section>
    </article>
  )
}

export { GameView }
