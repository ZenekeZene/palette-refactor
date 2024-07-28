import { Color } from '@gameContext/color/domain/Color'
import { MixColorResponse } from '../dto/MixColorResponse'

export const toMixColorResponse = (mixedColor: Color): MixColorResponse => ({
  mixedColor: mixedColor.valueOf(),
})
