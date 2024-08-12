import { useNavigate } from 'react-router-dom'
import { Header } from '@frontend/ui/components/Header/Header'
import { Bonus } from '@frontend/ui/components/Bonus/Bonus'
import { useStore } from '@frontend/adapter/store/useStore'
import { ColorsRow } from '@frontend/ui/components/ColorRow/ColorRow'
import {
  ColorSwatch,
  SubtractedColorReached,
} from '@frontend/ui/components/ColorSwatch/ColorSwatch'
import { useColors } from '@frontend/ui/hooks/useColors/useColors'
import type { PlayerStore } from '@frontend/adapter/store/slices/playerStore/playerStore.d'
import {
  GameWrapper,
  Divider,
  Footer,
  ResultZone,
  DraggableZone,
} from './Game.styled'
import { ColorTypes } from '@gameContext/shared/infrastructure/store/store.d'

const GameView = () => {
  const navigate = useNavigate()
  const player = useStore((state: PlayerStore) => state.player)
  const { colors, swatchColor, nextColor, mixColor } = useColors()

  const handleDragEnd = (subtractedColorReached: SubtractedColorReached) => {
    if (!subtractedColorReached) return
    const groupId = subtractedColorReached.getAttribute('data-group-id')!
    const subtractedColorId = subtractedColorReached.getAttribute('data-id')!
    const swatchColorId = swatchColor.id
    mixColor(groupId, subtractedColorId, swatchColorId)
  }

  return (
    <GameWrapper className="view">
      {/* TODO: Implement the ResultZone component */}
      <ResultZone>
        <Header
          level={player.levelIndex + 1}
          lives={player.lives}
          score={player.score}
          onBack={() => navigate('/')}
        />
        {colors && <ColorsRow colors={colors} type={ColorTypes.RESULT} />}
      </ResultZone>
      <Divider />
      {/* TODO: Implement the DraggableZone component */}
      <DraggableZone>
        {colors && <ColorsRow colors={colors} type={ColorTypes.SUBTRACTED} />}

        {swatchColor && (
          <ColorSwatch
            color={swatchColor}
            onClick={nextColor}
            onDragEnd={handleDragEnd}
          />
        )}
        <Footer>{player.bonus > 0 && <Bonus bonus={player.bonus} />}</Footer>
      </DraggableZone>
    </GameWrapper>
  )
}

export { GameView }
