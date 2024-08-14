import { LevelId } from '@gameContext/level/domain/models/level/LevelId'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { ColorGroup } from './models/colorGroup/ColorGroup'
import { ColorGroupCollectionId } from './ColorGroupCollectionId'
import { ColorGroupId } from './models/colorGroup/ColorGroupId'
import { ColorChipId } from './models/colorChip/ColorChipId'
import { ColorGroupSuccessfullyMixed } from './events/ColorGroupSuccessfullyMixed'
import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { ColorGroupFailedMixed } from './events/ColorGroupFailedMixed'
import { ColorGroupNotFoundInCollection } from './exceptions/ColorGroupNotFoundInCollection'

export class ColorGroupCollection extends AggregateRoot {
  constructor(
    readonly id: ColorGroupCollectionId,
    readonly items: ColorGroup[] = [],
    readonly levelId: LevelId,
  ) {
    super()
  }

  private isColorGroupPresent(colorGroup: ColorGroup): boolean {
    return (
      this.items.find((item) => item.id.equals(colorGroup.id)) !== undefined
    )
  }

  private getColorGroup(colorGroup: ColorGroup): ColorGroup {
    return this.items.find((item) => item.id.equals(colorGroup.id))!
  }

  getColorGroupById(colorGroupId: ColorGroupId): ColorGroup {
    return this.items.find((item) => item.id.equals(colorGroupId))!
  }

  areTheSameColorGroup(
    colorGroupReference: ColorGroup,
    swatchColorId: ColorChipId,
  ): boolean {
    if (this.isColorGroupPresent(colorGroupReference)) {
      const colorGroup = this.getColorGroup(colorGroupReference)
      return colorGroup.swatchColor.equalsById(swatchColorId)
    }
    return false
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
    )
  }

  each(callback: (colorGroup: ColorGroup) => void) {
    this.items.forEach(callback)
  }

  success(colorGroup: ColorGroup) {
    if (this.isColorGroupPresent(colorGroup)) {
      colorGroup.success()
      this.recordColorGroupSuccessfullyMixed(colorGroup)
    } else {
      throw new ColorGroupNotFoundInCollection(colorGroup.id)
    }
  }

  fail(colorGroup: ColorGroup) {
    if (this.isColorGroupPresent(colorGroup)) {
      colorGroup.fail()
      this.recordColorGroupFailedMixed(colorGroup)
    } else {
      throw new ColorGroupNotFoundInCollection(colorGroup.id)
    }
  }

  private recordColorGroupSuccessfullyMixed(colorGroup: ColorGroup) {
    const colorGroupSuccessfullyMixed = new ColorGroupSuccessfullyMixed({
      aggregateId: this.id.valueOf(),
      mixed: colorGroup,
      eventId: Uuid.random().valueOf(),
      occurredOn: new Date(),
    })
    this.record(colorGroupSuccessfullyMixed)
  }

  private recordColorGroupFailedMixed(colorGroup: ColorGroup) {
    const colorGroupMixedFailed = new ColorGroupFailedMixed({
      aggregateId: this.id.valueOf(),
      failedMixed: colorGroup,
      correctMixed: this.searchCorrectColorGroup(colorGroup.swatchColor.id),
      eventId: Uuid.random().valueOf(),
      occurredOn: new Date(),
    })
    this.record(colorGroupMixedFailed)
  }

  toPrimitive() {
    return {
      id: this.id.valueOf(),
      items: this.items.map((item) => item.toPrimitive()),
      levelId: this.levelId.valueOf(),
    }
  }
}
