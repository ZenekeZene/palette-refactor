import { Entity } from '@gameContext/shared/domain/utils/Entity'
import { ColorChipId } from '@gameContext/shared/domain/ColorChipId'
import { Color } from '../Color'
import { ColorChipType, ColorChipTypeOf } from './ColorChipType'

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

  toPrimitive() {
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

  static fromResultColor(color: Color): ColorChip {
    return new ColorChip(
      new ColorChipId(),
      color,
      new ColorChipType(ColorChipType.types.RESULT),
    )
  }

  static fromTypeAndColor(
    type: ColorChipType | ColorChipTypeOf,
    color: Color,
  ): ColorChip {
    const colorChipType =
      type instanceof ColorChipType ? type : new ColorChipType(type)
    return new ColorChip(new ColorChipId(), color, colorChipType)
  }
}

export type ColorChipPrimitive = ReturnType<ColorChip['toPrimitive']>
