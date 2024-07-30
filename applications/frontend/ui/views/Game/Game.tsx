import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import { HeaderGame } from '@frontend/ui/components/HeaderGame/HeaderGame'
import { Bonus } from '@frontend/ui/components/Bonus/Bonus'
import { useStore } from '@frontend/adapter/store/useStore'
import { ColorMixDebug } from '@frontend/ui/components/ColorMixDebug/ColorMixDebug'
import { Colors } from '@gameContext/shared/infrastructure/store/store'
import { ColorsRow } from '@frontend/ui/components/ColorRow/ColorRow'
import './Game.scss'

const GameView = () => {
  const [colors, setColors] = useState<Colors>()
  const navigate = useNavigate()
  const { player, generateColors } = useStore(
    useShallow(({ player, generateColors }) => ({
      player,
      generateColors,
    })),
  )

  useEffect(() => {
    const loadColors = async () => {
      const colors = await generateColors()
      setColors(colors)
    }

    loadColors()
  }, [])

  const resultColors = colors?.items.map((color) => color.resultColor)
  const subtractedColors = colors?.items.map((color) => color.subtractedColor)

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
        <div className="game__chip"></div>

        {player.bonus > 0 && (
          <div className="game__bonus">
            <Bonus bonus={player.bonus} />
          </div>
        )}

        {colors && <ColorMixDebug colors={colors} />}
      </section>
    </article>
  )
}

export { GameView }
