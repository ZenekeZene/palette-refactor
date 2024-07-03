import { LevelPrizeBonus } from '../levelPrize/LevelPrizeBonus'
import { LevelPrizeLives } from '../levelPrize/LevelPrizeLives'
import { LevelPrize, LevelPrizeRawModel } from '../levelPrize/LevelPrize'
import { LevelChips } from './LevelChips'
import { LevelId } from './LevelId'

export interface LevelRawModel {
  id: string
  numberOfChips: number
  prize: LevelPrizeRawModel
}

class Level {
  constructor(
    private readonly id: LevelId,
    private readonly numberOfChips: LevelChips,
    private readonly levelPrize: LevelPrize
  ) { }

  getId() {
    return this.id
  }

  getNumberOfChips() {
    return this.numberOfChips
  }

  getLevelPrize() {
    return this.levelPrize
  }

  static fromPrimitive(id: string, numberOfChips: number, levelPrizeValue: LevelPrizeRawModel): Level {
    const levelId = new LevelId(id)
    const levelChips = new LevelChips(numberOfChips)
    const levelPrize = new LevelPrize(new LevelPrizeLives(levelPrizeValue.lives), new LevelPrizeBonus(levelPrizeValue.bonus))
    return new Level(levelId, levelChips, levelPrize)
  }

  static toPrimitive(level: Level): LevelRawModel {
    return {
      id: level.id.toPrimitive(),
      numberOfChips: level.numberOfChips.toPrimitive(),
      prize: level.levelPrize.toPrimitive(),
    }
  }
}

export { Level }
