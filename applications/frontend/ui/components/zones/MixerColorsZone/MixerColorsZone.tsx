import type {
  Color,
  Colors,
  Player,
} from '@gameContext/shared/infrastructure/store/store.d'
import { ColorTypes } from '@gameContext/shared/infrastructure/store/store.d'
import { ColorsRow } from '../../color/ColorRow/ColorRow'
import {
  ColorSwatch,
  SubtractedColorReached,
} from '../../color/ColorSwatch/ColorSwatch'
import { Bonus } from '../../gui/Bonus/Bonus'
import { DraggableZone, Footer } from './MixerColorsZone.styled'

interface Props {
  player: Player
  colors: Colors
  swatchColor: Color
  handleDragEnd: (subtractedColor: SubtractedColorReached) => void
}

export const MixerColorsZone = ({
  player,
  colors,
  swatchColor,
  handleDragEnd,
}: Props) => {
  return (
    <DraggableZone>
      {colors && <ColorsRow colors={colors} type={ColorTypes.SUBTRACTED} />}

      {swatchColor && (
        <ColorSwatch
          color={swatchColor}
          onClick={() => {}}
          onDragEnd={handleDragEnd}
        />
      )}
      <Footer>{player.bonus > 0 && <Bonus bonus={player.bonus} />}</Footer>
    </DraggableZone>
  )
}
