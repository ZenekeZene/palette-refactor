import { useNavigate } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
// TODO: change this import to use an action using a usecase of domain
// to generate random colors
import { Color } from '@gameContext/color/domain/Color'
import { HeaderGame } from '@frontend/ui/components/HeaderGame/HeaderGame'
import { Bonus } from '@frontend/ui/components/Bonus/Bonus'
import { GameChip } from '@frontend/ui/components/GameChip/GameChip'
import { useStore } from '@frontend/adapter/store/useStore'
import './Game.scss'

const GameView = () => {
  const navigate = useNavigate()
  const { player, mixColor } = useStore(
    useShallow(({ player, mixColor }) => ({
      player,
      mixColor,
    })),
  )

  const handleMixColor = async () => {
    const color1 = Color.random().toPrimitive()
    const color2 = Color.random().toPrimitive()
    await mixColor(color1, color2)
  }

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

        <button onClick={handleMixColor} className="next-level__next">
          Mix colors
        </button>
      </section>
    </article>
  )
}

export { GameView }
