import { Color } from '@gameContext/color/domain/models/Color'
import { MixColorResponse } from '../dto/MixColorResponse'

export const toMixColorResponse = (mixedColor: Color): MixColorResponse => ({
  value: mixedColor.valueOf(),
})
