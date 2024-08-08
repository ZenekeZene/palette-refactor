import { ColorChip } from '@gameContext/color/domain/models/colorChip/ColorChip'
import { MixColorResponse } from '../dto/MixColorResponse'

export const toMixColorResponse = (mixedColor: ColorChip): MixColorResponse =>
  new MixColorResponse(mixedColor.toPrimitive())
