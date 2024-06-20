import { Level } from '@/domain/Level/Level'
import { LevelChips } from '@/domain/Level/LevelChips'
import { Prize } from '@/domain/Prize/Prize'
import { LevelId } from '@/domain/Level/LevelId'

export class LevelsCollection {
  private _levels: Map<LevelId, Level> = new Map()

  constructor() {}

  add(level: Level) {
    this._levels.set(level.id, level)
  }

  static fromArray(quotes: any[]): LevelsCollection {
    const levelsCollection = new LevelsCollection()
    quotes.forEach((quote) => {
      const numberOfChips = new LevelChips(quote.numberOfChips)
      const prize = new Prize(quote.prize)
      levelsCollection.add(new Level(numberOfChips, prize))
    })
    return levelsCollection
  }

  getNumberOfLevels() {
    return this._levels.size || 0
  }
}
