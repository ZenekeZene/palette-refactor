import { Entity } from '@gameContext/shared/domain/utils/Entity'
import { Color, ColorPrimitive } from '../Color'
import { ColorChipType } from './ColorChipType'
import { ColorChipId } from './ColorChipId'

export class ColorChip extends Entity {
  readonly id: ColorChipId
  readonly value: Color
  readonly type: ColorChipType

  constructor(id: ColorChipId, value: Color, type: ColorChipType) {
    super()
    this.id = id ? id : new ColorChipId()
    this.value = value
    this.type = type
  }

  isEqualTo(colorChip: ColorChip): boolean {
    return this.value.isEqualTo(colorChip.value)
  }

  toPrimitive(): ColorChipPrimitive {
    return {
      id: this.id.valueOf(),
      value: this.value.valueOf(),
      type: this.type.valueOf(),
    }
  }

  static fromPrimitive(colorChipPrimitive: ColorChipPrimitive): ColorChip {
    return new ColorChip(
      new ColorChipId(colorChipPrimitive.id),
      new Color(colorChipPrimitive.value),
      new ColorChipType(colorChipPrimitive.type),
    )
  }
}

export interface ColorChipPrimitive {
  id: string
  value: ColorPrimitive
  type: string
}
