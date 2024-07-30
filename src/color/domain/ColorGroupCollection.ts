import { LevelId } from '@gameContext/level/domain/models/level/LevelId'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { ColorGroup } from './ColorGroup'

export class ColorGroupCollection extends AggregateRoot {
  constructor(
    readonly items: ColorGroup[] = [],
    readonly levelId: LevelId,
  ) {
    super()
  }

  add(colorGroup: ColorGroup) {
    return new ColorGroupCollection([...this.items, colorGroup], this.levelId)
  }

  each(callback: (colorGroup: ColorGroup) => void) {
    this.items.forEach(callback)
  }

  toPrimitives() {
    return {
      items: this.items.map((item) => item.toPrimitive()),
      levelId: this.levelId.valueOf(),
    }
  }
}
