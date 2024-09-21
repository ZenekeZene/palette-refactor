import type {
  Color,
  Colors,
} from '@gameContext/shared/infrastructure/store/store.d'
import { ColorTypes } from '@gameContext/shared/infrastructure/store/store.d'
import {
  ColorSwatch,
  type SubtractedColorReached,
} from '../../color/ColorSwatch/ColorSwatch'
import { Bonus } from '../../gui/Bonus/Bonus'
import { ColorsRow } from '../../color/ColorRow/ColorRow'
import { DraggableZone, Footer } from './MixerColorsZone.styled'

interface Props {
  bonus: number
  colors: Colors
  swatchColor: Color
  handleDragEnd: (subtractedColor: SubtractedColorReached) => void
  handleUseBonus: () => void
}

export const MixerColorsZone = ({
  bonus,
  colors,
  swatchColor,
  handleDragEnd,
  handleUseBonus,
}: Props) => {
  return (
    <DraggableZone>
      {colors && <ColorsRow colors={colors} type={ColorTypes.SUBTRACTED} />}

      {swatchColor && (
        <ColorSwatch color={swatchColor} onDragEnd={handleDragEnd} />
      )}
      <Footer>
        {bonus > 0 && <Bonus bonus={bonus} onClick={handleUseBonus} />}
      </Footer>
    </DraggableZone>
  )
}
