import { useStore } from '@frontend/adapter/store/useStore'
import type { PlayerStore } from '@frontend/adapter/store/slices/playerStore/playerStore.d'
import { SubtractedColorReached } from '@frontend/ui/components/color/ColorSwatch/ColorSwatch'
import { useColors } from '@frontend/ui/hooks/useColors/useColors'
import { ResultColorsZone } from '@frontend/ui/components/zones/ResultColorsZone/ResultColorsZone'
import { MixerColorsZone } from '@frontend/ui/components/zones/MixerColorsZone/MixerColorsZone'
import { useGoToView } from '@frontend/ui/hooks/useGoToView/useGoToView'
import { GameWrapper, Divider } from './Game.styled'

export const GameView = () => {
  const player = useStore((state: PlayerStore) => state.player)
  const { colors, swatchColor, mixColor } = useColors()
  useGoToView()

  const handleDragEnd = (subtractedColorReached: SubtractedColorReached) => {
    if (!subtractedColorReached) return
    const groupId = subtractedColorReached.getAttribute('data-group-id')!
    const swatchColorId = swatchColor.id
    mixColor(groupId, swatchColorId)
  }

  return (
    <GameWrapper className="view">
      <ResultColorsZone player={player} colors={colors} />
      <Divider />
      <MixerColorsZone
        player={player}
        colors={colors}
        swatchColor={swatchColor}
        handleDragEnd={handleDragEnd}
      />
    </GameWrapper>
  )
}

GameView.path = '/game'
