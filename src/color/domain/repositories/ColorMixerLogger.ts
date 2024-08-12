import { ColorGroup } from '../models/colorGroup/ColorGroup'
import { Color } from '../models/Color'
import { ColorChip } from '../models/colorChip/ColorChip'

export interface ColorMixerLogger {
  log(
    color1: Color | ColorChip,
    color2: Color | ColorChip,
    mixedColor: Color | ColorChip,
  ): void
  logGroup(colorGroup: ColorGroup, message?: string): void
  success(colorGroup: ColorGroup): void
  fail(colorGroup: ColorGroup): void
}
