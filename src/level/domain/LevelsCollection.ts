import { Level } from './Level'
import { LevelChips } from './LevelChips'
import { Prize } from '@gameContext/domain/Prize/Prize'
import { LevelId } from './LevelId'

export class LevelsCollection {
  private _levels: Map<LevelId, Level> = new Map()

  add(level: Level) {
    this._levels.set(level.id, level)
  }

  static fromArray(levels: any[]): LevelsCollection {
    const levelsCollection = new LevelsCollection()
    levels.forEach((level) => {
      const numberOfChips = new LevelChips(level.numberOfChips)
      const prize = new Prize(level.prize, level.bonus)
      levelsCollection.add(new Level(numberOfChips, prize))
    })
    return levelsCollection
  }

  getNumberOfLevels() {
    return this._levels.size || 0
  }
}
