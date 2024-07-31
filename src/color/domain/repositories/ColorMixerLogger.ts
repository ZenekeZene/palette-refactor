import { ColorGroup } from '../models/colorGroup/ColorGroup'
import { Color } from '../models/Color'
import { ColorChip } from '../models/ColorChip'

export interface ColorMixerLogger {
  log(
    color1: Color | ColorChip,
    color2: Color | ColorChip,
    mixedColor: Color | ColorChip,
  ): void
  logGroup(colorGroup: ColorGroup): void
}
