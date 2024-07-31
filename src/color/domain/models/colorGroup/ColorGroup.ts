import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { ColorMixer } from '../../services/ColorMixer'
import { ColorChip } from '../colorChip/ColorChip'
import { ColorGroupId } from './ColorGroupId'
import { ColorGroupStatus } from './ColorGroupStatus'
import { ColorsAreEqualsException } from '../../exceptions/ColorsAreEqualsException'

export class ColorGroup extends AggregateRoot {
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

  mix() {
    const colorMixer = new ColorMixer(
      this.subtractedColor.value,
      this.swatchColor.value,
    )
    const mixedColor = colorMixer.mix()
    if (mixedColor.isEqualTo(this.resultColor.value)) {
      this.status.transitionToMixed()
    } else {
      this.status.transitionToError()
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
      resultColor: this.resultColor.value.toPrimitive(),
      subtractedColor: this.subtractedColor.value.toPrimitive(),
      swatchColor: this.swatchColor.value.toPrimitive(),
    }
  }
}
