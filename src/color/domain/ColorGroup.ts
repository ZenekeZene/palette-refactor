import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { LevelId } from '@gameContext/level/domain/models/level/LevelId'
import { ColorMixer } from './services/ColorMixer'
import { ColorChip } from './models/colorChip/ColorChip'
import { ColorGroupId } from './ColorGroupId'
import { ColorGroupStatus } from './ColorGroupStatus'

export class ColorGroup extends AggregateRoot {
  readonly id: ColorGroupId
  readonly colorResult: ColorChip
  readonly colorSustracted: ColorChip
  readonly colorSwatch: ColorChip
  private status: ColorGroupStatus
  readonly levelId: LevelId

  constructor(
    id: ColorGroupId,
    colorResult: ColorChip,
    colorSustracted: ColorChip,
    colorSwatch: ColorChip,
    levelId: LevelId,
  ) {
    super()
    this.id = id
    this.colorResult = colorResult
    this.colorSustracted = colorSustracted
    this.colorSwatch = colorSwatch
    this.levelId = levelId
    this.status = new ColorGroupStatus()

    this.validate()
  }

  private validate() {
    const checkEquality = (color1: ColorChip, color2: ColorChip) => {
      if (color1.isEqualTo(color2)) {
        throw new Error('Colors must be different')
      }
    }

    checkEquality(this.colorResult, this.colorSustracted)
    checkEquality(this.colorResult, this.colorSwatch)
    checkEquality(this.colorSustracted, this.colorSwatch)
  }

  mix() {
    const colorMixer = new ColorMixer(
      this.colorSustracted.value,
      this.colorSwatch.value,
    )
    const mixedColor = colorMixer.mix()
    if (mixedColor.isEqualTo(this.colorResult.value)) {
      this.status.transitionToMixed()
    } else {
      this.status.transitionToError()
    }
  }

  isMixed() {
    this.status.isMixed()
  }

  isPending() {
    return !this.status.isMixed()
  }
}
