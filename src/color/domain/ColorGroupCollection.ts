import { LevelId } from '@gameContext/level/domain/models/level/LevelId'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { ColorGroup } from './models/colorGroup/ColorGroup'
import { ColorGroupCollectionId } from './ColorGroupCollectionId'

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

  toPrimitive() {
    return {
      id: this.id.valueOf(),
      items: this.items.map((item) => item.toPrimitive()),
      levelId: this.levelId.valueOf(),
    }
  }
}
