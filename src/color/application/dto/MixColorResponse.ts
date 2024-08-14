import { ColorMixerFailed } from '@gameContext/color/domain/exceptions/ColorMixerFailed'
import { ColorGroup } from '@gameContext/color/domain/models/colorGroup/ColorGroup'
import { Result } from '@gameContext/shared/domain/utils/Result'

export class MixColorResponse {
  readonly result: Result<ColorGroup, ColorMixerFailed>

  constructor(result: Result<ColorGroup, ColorMixerFailed>) {
    this.result = result
  }
}
