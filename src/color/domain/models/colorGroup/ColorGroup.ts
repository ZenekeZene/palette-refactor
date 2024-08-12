import { Entity } from '@gameContext/shared/domain/utils/Entity'
import { ColorChip } from '../colorChip/ColorChip'
import { ColorsAreEqualsException } from '../../exceptions/ColorsAreEqualsException'
import { ColorGroupId } from './ColorGroupId'
import { ColorGroupStatus } from './ColorGroupStatus'

export class ColorGroup extends Entity {
  readonly id: ColorGroupId
  readonly resultColor: ColorChip
  readonly subtractedColor: ColorChip
  readonly swatchColor: ColorChip
  private status: ColorGroupStatus

  constructor(params: {
    id: ColorGroupId
    resultColor: ColorChip
    subtractedColor: ColorChip
    swatchColor: ColorChip
  }) {
    super()
    this.id = params.id
    this.resultColor = params.resultColor
    this.subtractedColor = params.subtractedColor
    this.swatchColor = params.swatchColor
    this.status = new ColorGroupStatus()

    this.validate()
  }

  private validate() {
    const checkEquality = (color1: ColorChip, color2: ColorChip) => {
      if (color1.isEqualTo(color2)) {
        throw new ColorsAreEqualsException(color1.value, color2.value)
      }
    }

    checkEquality(this.resultColor, this.subtractedColor)
    checkEquality(this.resultColor, this.swatchColor)
    checkEquality(this.subtractedColor, this.swatchColor)
  }

  success() {
    this.status = this.status.transitionToMixed()
  }

  fail() {
    this.status = this.status.transitionToFailed()
  }

  isMixed(): boolean {
    return this.status.isMixed()
  }

  isPending() {
    return !this.status.isMixed()
  }

  toPrimitive() {
    return {
      id: this.id.valueOf(),
      resultColor: this.resultColor.toPrimitive(),
      subtractedColor: this.subtractedColor.toPrimitive(),
      swatchColor: this.swatchColor.toPrimitive(),
      status: this.status.valueOf(),
    }
  }
}
