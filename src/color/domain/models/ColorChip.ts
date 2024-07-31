import { Color, ColorPrimitive } from './Color'
import { ColorType, ColorTypePrimitive } from './ColorType'
import { ValueObject } from '@gameContext/shared/domain/utils/ValueObject'

export class ColorChip extends ValueObject<Color> {
  readonly type: ColorType

  constructor(value: Color, type: ColorType) {
    super(value)
    this.type = type
  }

  isEqualTo(colorChip: ColorChip): boolean {
    return this.value.isEqualTo(colorChip.value)
  }

  toPrimitive(): ColorChipPrimitive {
    return {
      value: this.value.valueOf(),
      type: this.type.valueOf(),
    }
  }
}

export interface ColorChipPrimitive {
  value: ColorPrimitive
  type: ColorTypePrimitive
}
