import { useNavigate } from 'react-router-dom'
import { HeaderGame } from '@frontend/ui/components/HeaderGame/HeaderGame'
import { Bonus } from '@frontend/ui/components/Bonus/Bonus'
import { useStore } from '@frontend/adapter/store/useStore'
import { ColorMixDebug } from '@frontend/ui/components/ColorMixDebug/ColorMixDebug'
import { ColorsRow } from '@frontend/ui/components/ColorRow/ColorRow'
import { ColorSwatch } from '@frontend/ui/components/ColorSwatch/ColorSwatch'
import { useColors } from '@frontend/ui/hooks/useColors/useColors'
import './Game.scss'

const GameView = () => {
  const navigate = useNavigate()
  const player = useStore((state) => state.player)
  const {
    colors,
    resultColors,
    subtractedColors,
    swatchColors,
    indexSwatchColor,
    nextColor,
  } = useColors()

  const swatchColor = swatchColors[indexSwatchColor]

  return (
    <article className="game view">
      <HeaderGame
        level={player.levelIndex + 1}
        lives={player.lives}
        score={player.score}
        onBack={() => navigate('/')}
      />

      {resultColors && <ColorsRow colors={resultColors} />}
      <div className="game__divider"></div>
      {subtractedColors && <ColorsRow colors={subtractedColors} />}

      <section className="game__footer">
        <div className="game__swatch">
          {swatchColor && (
            <ColorSwatch color={swatchColor} onClick={nextColor} />
          )}
        </div>

        {player.bonus > 0 && (
          <div className="game__bonus">
            <Bonus bonus={player.bonus} />
          </div>
        )}

        {colors && <ColorMixDebug items={colors.items} />}
      </section>
    </article>
  )
}

export { GameView }
