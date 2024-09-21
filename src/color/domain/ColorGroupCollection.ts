import { LevelId } from '@gameContext/shared/domain/LevelId'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { ColorGroup } from './models/colorGroup/ColorGroup'
import { ColorGroupCollectionId } from './ColorGroupCollectionId'
import { ColorGroupId } from './models/colorGroup/ColorGroupId'
import { ColorChipId } from './models/colorChip/ColorChipId'
import { ColorMixingSuccessfulEvent } from './events/ColorMixingSuccessfulEvent'
import { ColorMixingFailedEvent } from './events/ColorMixingFailedEvent'
import { ColorGroupNotFoundInCollection } from './exceptions/ColorGroupNotFoundInCollection'
import { PlayerId } from '@gameContext/shared/domain/PlayerId'
import { ColorGenerator } from './services/ColorGenerator'
import { NoColorGroupToMix } from './exceptions/NoColorGroupToMix'

export class ColorGroupCollection extends AggregateRoot {
  private constructor(
    readonly id: ColorGroupCollectionId,
    readonly items: ColorGroup[] = [],
    readonly levelId: LevelId,
    readonly playerId: PlayerId,
  ) {
    super()
  }

  static of(args: {
    numberOfColorsToGenerate: number
    levelId: LevelId
    playerId: PlayerId
  }) {
    return new ColorGroupCollection(
      new ColorGroupCollectionId(),
      new ColorGenerator(args.numberOfColorsToGenerate).generate(),
      args.levelId,
      args.playerId,
    )
  }

  private isColorGroupPresent(colorGroup: ColorGroup): boolean {
    return (
      this.items.find((item) => item.id.equals(colorGroup.id)) !== undefined
    )
  }

  private getColorGroup(colorGroup: ColorGroup): ColorGroup {
    return this.items.find((item) => item.id.equals(colorGroup.id))!
  }

  private getColorGroupsNotMixed(): ColorGroup[] {
    return this.items.filter((colorGroup) => colorGroup.isPending())
  }

  private success(colorGroup: ColorGroup) {
    if (this.isColorGroupPresent(colorGroup)) {
      colorGroup.success()
      this.recordColorMixingSuccessful(colorGroup)
    } else {
      throw new ColorGroupNotFoundInCollection(colorGroup.id)
    }
  }

  private fail(colorGroup: ColorGroup, swatchColorId: ColorChipId) {
    if (this.isColorGroupPresent(colorGroup)) {
      colorGroup.fail()
      this.recordColorMixingFailed(colorGroup.id, swatchColorId)
    } else {
      throw new ColorGroupNotFoundInCollection(colorGroup.id)
    }
  }

  private recordColorMixingSuccessful(colorGroupMixed: ColorGroup) {
    const colorMixingSuccessful = ColorMixingSuccessfulEvent.of({
      aggregate: this,
      mixed: colorGroupMixed,
    })
    this.record(colorMixingSuccessful)
  }

  private recordColorMixingFailed(
    colorGroupIdFailed: ColorGroupId,
    swatchColorId: ColorChipId,
  ) {
    const colorMixingFailed = ColorMixingFailedEvent.of({
      aggregate: this,
      colorGroupIdFailed,
      swatchColorId,
    })
    this.record(colorMixingFailed)
  }

  getColorGroupById(colorGroupId: ColorGroupId): ColorGroup {
    return this.items.find((item) => item.id.equals(colorGroupId))!
  }

  mixColorGroupPending(): ColorGroup {
    const colorGroupsNotMixed = this.getColorGroupsNotMixed()
    if (colorGroupsNotMixed.length === 0) {
      throw NoColorGroupToMix.of(this.id)
    }
    const randomIndex = Math.floor(Math.random() * colorGroupsNotMixed.length)
    const colorGroupToMix = colorGroupsNotMixed[randomIndex]
    this.success(colorGroupToMix)
    return colorGroupToMix
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

  each(callback: (colorGroup: ColorGroup) => void) {
    this.items.forEach(callback)
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
