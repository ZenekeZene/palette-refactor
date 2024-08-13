import { ColorGroup } from '@gameContext/color/domain/models/colorGroup/ColorGroup'
import { Result } from '@gameContext/shared/domain/utils/Result'

export class MixColorResponse {
  readonly result: Result<ColorGroup, Error>

  constructor(result: Result<ColorGroup, Error>) {
    this.result = result
  }
}
