import { ColorChipPrimitive } from '@gameContext/color/domain/models/colorChip/ColorChip'
import type { Response } from '@gameContext/shared/domain/utils/Response'

export class MixColorResponse implements Response {
  constructor(public readonly value: ColorChipPrimitive) {}
}
