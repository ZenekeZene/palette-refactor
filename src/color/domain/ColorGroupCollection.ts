import { LevelId } from '@gameContext/level/domain/models/level/LevelId'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { ColorGroup } from './models/colorGroup/ColorGroup'
import { ColorGroupCollectionId } from './ColorGroupCollectionId'
import { ColorGroupId } from './models/colorGroup/ColorGroupId'
import { ColorChipId } from './models/colorChip/ColorChipId'
import { ColorMixingSuccessfulEvent } from './events/ColorMixingSuccessfulEvent'
import { ColorMixingFailedEvent } from './events/ColorMixingFailedEvent'
import { ColorGroupNotFoundInCollection } from './exceptions/ColorGroupNotFoundInCollection'
import { PlayerId } from '@gameContext/player/domain/models/PlayerId'

export class ColorGroupCollection extends AggregateRoot {
  constructor(
    readonly id: ColorGroupCollectionId,
    readonly items: ColorGroup[] = [],
    readonly levelId: LevelId,
    readonly playerId: PlayerId,
  ) {
    super()
  }

  private isColorGroupPresent(colorGroup: ColorGroup): boolean {
    return (
      this.items.find((item) => item.id.equals(colorGroup.id)) !== undefined
    )
  }

  getColorGroup(colorGroup: ColorGroup): ColorGroup {
    return this.items.find((item) => item.id.equals(colorGroup.id))!
  }

  getColorGroupById(colorGroupId: ColorGroupId): ColorGroup {
    return this.items.find((item) => item.id.equals(colorGroupId))!
  }

  areTheSameColorGroup(
    colorGroupReference: ColorGroup,
    swatchColorId: ColorChipId,
  ): boolean {
    if (!this.isColorGroupPresent(colorGroupReference)) return false
    const colorGroup = this.getColorGroup(colorGroupReference)
    const areEquals = colorGroup.swatchColor.equalsById(swatchColorId)
    areEquals ? this.success(colorGroup) : this.fail(colorGroup, swatchColorId)
    return areEquals
  }

  searchCorrectColorGroup(swatchColorId: ColorChipId): ColorGroup {
    return this.items.find((colorGroup) =>
      colorGroup.swatchColor.equalsById(swatchColorId),
    )!
  }

  add(colorGroup: ColorGroup) {
    if (this.isColorGroupPresent(colorGroup)) {
      return this
    }
    return new ColorGroupCollection(
      this.id,
      [...this.items, colorGroup],
      this.levelId,
      this.playerId,
    )
  }

  each(callback: (colorGroup: ColorGroup) => void) {
    this.items.forEach(callback)
  }

  success(colorGroup: ColorGroup) {
    if (this.isColorGroupPresent(colorGroup)) {
      colorGroup.success()
      this.recordColorMixingSuccessful(colorGroup)
    } else {
      throw new ColorGroupNotFoundInCollection(colorGroup.id)
    }
  }

  fail(colorGroup: ColorGroup, swatchColorId: ColorChipId) {
    if (this.isColorGroupPresent(colorGroup)) {
      colorGroup.fail()
      this.recordColorMixingFailed(colorGroup, swatchColorId)
    } else {
      throw new ColorGroupNotFoundInCollection(colorGroup.id)
    }
  }

  private recordColorMixingSuccessful(colorGroup: ColorGroup) {
    const colorMixingSuccessful = ColorMixingSuccessfulEvent.of({
      aggregate: this,
      mixed: colorGroup,
    })
    this.record(colorMixingSuccessful)
  }

  private recordColorMixingFailed(
    colorGroup: ColorGroup,
    swatchColorId: ColorChipId,
  ) {
    const colorMixingFailed = ColorMixingFailedEvent.of({
      aggregate: this,
      colorGroup,
      swatchColorId,
    })
    this.record(colorMixingFailed)
  }

  toPrimitive() {
    return {
      id: this.id.valueOf(),
      items: this.items.map((item) => item.toPrimitive()),
      levelId: this.levelId.valueOf(),
      playerId: this.playerId.valueOf(),
    }
  }
}
