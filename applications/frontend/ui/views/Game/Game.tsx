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
  DropZone,
  DraggableZone,
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
      <DropZone>
        <Header
          level={player.levelIndex + 1}
          lives={player.lives}
          score={player.score}
          onBack={() => navigate('/')}
        />
        {resultColors && <ColorsRow colors={resultColors} />}
      </DropZone>
      <Divider />
      <DraggableZone>
        {subtractedColors && <ColorsRow colors={subtractedColors} />}

        <ColorSwatch color={swatchColor} onClick={nextColor} />
        <Footer>
          {player.bonus > 0 && <Bonus bonus={player.bonus} />}

          {colors?.length > 0 && <ColorMixDebug colors={colors.items} />}
        </Footer>
      </DraggableZone>
    </GameWrapper>
  )
}

export { GameView }
