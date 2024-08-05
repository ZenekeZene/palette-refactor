import { useNavigate } from 'react-router-dom'
import { Header } from '@frontend/ui/components/Header/Header'
import { Bonus } from '@frontend/ui/components/Bonus/Bonus'
import { useStore } from '@frontend/adapter/store/useStore'
import { ColorMixDebug } from '@frontend/ui/components/ColorMixDebug/ColorMixDebug'
import { ColorsRow } from '@frontend/ui/components/ColorRow/ColorRow'
import { ColorSwatch } from '@frontend/ui/components/ColorSwatch/ColorSwatch'
import { useColors } from '@frontend/ui/hooks/useColors/useColors'
import {
  GameWrapper,
  Divider,
  Footer,
  BonusWrapper,
  Swatch,
} from './Game.styled'

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
    <GameWrapper className="view">
      <Header
        level={player.levelIndex + 1}
        lives={player.lives}
        score={player.score}
        onBack={() => navigate('/')}
      />

      {resultColors && <ColorsRow colors={resultColors} />}
      <Divider />
      {subtractedColors && <ColorsRow colors={subtractedColors} />}

      <Footer>
        <Swatch>
          <ColorSwatch color={swatchColor} onClick={nextColor} />
        </Swatch>

        {player.bonus > 0 && (
          <BonusWrapper>
            <Bonus bonus={player.bonus} />
          </BonusWrapper>
        )}

        {colors?.length > 0 && <ColorMixDebug colors={colors.items} />}
      </Footer>
    </GameWrapper>
  )
}

export { GameView }
