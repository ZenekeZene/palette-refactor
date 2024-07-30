import { Entity } from '@gameContext/shared/domain/utils/Entity'
import { ColorChipId } from './ColorChipId'
import { Color } from '../Color'
import { ColorType } from '../ColorType'

// TODO: support type checking for ColorChip with generics?
export class ColorChip extends Entity {
  readonly id: ColorChipId

  constructor(
    readonly value: Color,
    readonly type: ColorType,
  ) {
    super()
    this.id = new ColorChipId()
  }

  isEqualTo(colorChip: ColorChip): boolean {
    return this.value.isEqualTo(colorChip.value)
  }
}
