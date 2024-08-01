import { Entity } from '@gameContext/shared/domain/utils/Entity'
import { ColorMixer } from '../../services/ColorMixer'
import { ColorChip } from '../ColorChip'
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
        throw new ColorsAreEqualsException(color1.valueOf(), color2.valueOf())
      }
    }

    checkEquality(this.resultColor, this.subtractedColor)
    checkEquality(this.resultColor, this.swatchColor)
    checkEquality(this.subtractedColor, this.swatchColor)
  }

  mix() {
    const colorMixer = new ColorMixer(
      this.subtractedColor.valueOf(),
      this.swatchColor.valueOf(),
    )
    const mixedColor = colorMixer.mix()
    if (mixedColor.isEqualTo(this.resultColor.valueOf())) {
      this.status = this.status.transitionToMixed()
    } else {
      this.status = this.status.transitionToError()
    }
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
      resultColor: this.resultColor.valueOf().toPrimitive(),
      subtractedColor: this.subtractedColor.valueOf().toPrimitive(),
      swatchColor: this.swatchColor.valueOf().toPrimitive(),
      status: this.status.valueOf(),
    }
  }
}
