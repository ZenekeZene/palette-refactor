import { ColorGroup } from '@gameContext/color/domain/models/colorGroup/ColorGroup'
import { Result } from '@gameContext/shared/domain/utils/Result'
import { ColorMixerFailed } from '@gameContext/color/domain/exceptions/ColorMixerFailed'
import { MixColorResponse } from '../dto/MixColorResponse'

export const toMixColorResponse = (
  colorGroup: ColorGroup | null,
  error: ColorMixerFailed | null,
): MixColorResponse => {
  const result = new Result(colorGroup || null, error || null)
  return new MixColorResponse(result)
}
