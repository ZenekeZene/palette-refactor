import { ColorGroup } from '@gameContext/color/domain/models/colorGroup/ColorGroup'
import { MixColorResponse } from '../dto/MixColorResponse'
import { Result } from '@gameContext/shared/domain/utils/Result'

export const toMixColorResponse = (
  colorGroup: ColorGroup | null,
  error: Error | null,
): MixColorResponse => {
  const result = new Result(colorGroup || null, error || null)
  return new MixColorResponse(result)
}
