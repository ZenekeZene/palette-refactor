import { Prize } from '@/domain/Prize/Prize'
import { LevelChips } from './LevelChips'
import { LevelId } from './LevelId'

class Level {
  private readonly _id: LevelId
  readonly numberOfChips: LevelChips
  readonly prize: Prize | undefined

  constructor(numberOfChips: LevelChips, prize?: Prize) {
    this._id = LevelId.random()
    this.numberOfChips = numberOfChips
    this.prize = prize
  }

  get id() {
    return this._id
  }

  getNumberOfChips() {
    return this.numberOfChips
  }

  static fromPrimitive(level: { numberOfChips: number; prize?: Prize }) {
    if (!level.prize) {
      return new Level(
        new LevelChips(level.numberOfChips)
      )
    }
    return new Level(
      new LevelChips(level.numberOfChips),
      new Prize(level.prize.lives, level.prize.bonus)
    )
  }
}

export { Level }
