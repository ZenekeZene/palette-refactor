import { ColorChipPrimitive } from '@gameContext/color/domain/models/colorChip/ColorChip'
import type { Request } from '@gameContext/shared/domain/utils/Request'

export class MixColorRequest implements Request {
  constructor(
    public readonly color1: ColorChipPrimitive,
    public readonly color2: ColorChipPrimitive,
  ) {}
}
