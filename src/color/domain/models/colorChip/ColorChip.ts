import { Entity } from '@gameContext/shared/domain/utils/Entity'
import { ColorChipId } from './ColorChipId'
import { Color } from '../Color'
import { ColorType } from '../ColorType'

export class ColorChip extends Entity {
  constructor(
    readonly id: ColorChipId,
    readonly value: Color,
    readonly type: ColorType,
  ) {
    super()
  }

  isEqualTo(colorChip: ColorChip): boolean {
    return this.value.isEqualTo(colorChip.value)
  }
}
