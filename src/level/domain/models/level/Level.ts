import { Entity } from '@gameContext/shared/domain/utils/Entity'
import { LevelId } from '@gameContext/shared/domain/LevelId'
import { LevelPrizeBonus } from '../levelPrize/LevelPrizeBonus'
import { LevelPrizeLives } from '../levelPrize/LevelPrizeLives'
import { LevelPrize, LevelPrizeRawModel } from '../levelPrize/LevelPrize'
import { LevelChips } from './LevelChips'

export interface LevelRawModel {
  id: string
  numberOfChips: number
  prize: LevelPrizeRawModel
}

class Level extends Entity {
  constructor(
    readonly id: LevelId,
    private readonly numberOfChips: LevelChips,
    private readonly levelPrize: LevelPrize,
  ) {
    super()
  }

  getNumberOfChips() {
    return this.numberOfChips
  }

  getLevelPrize() {
    return this.levelPrize
  }

  static fromPrimitive(
    id: string,
    numberOfChips: number,
    levelPrizeValue: LevelPrizeRawModel,
  ): Level {
    const levelId = new LevelId(id)
    const levelChips = new LevelChips(numberOfChips)
    const levelPrizeLives = new LevelPrizeLives(levelPrizeValue.lives)
    const levelPrizeBonus = new LevelPrizeBonus(levelPrizeValue.bonus)
    const levelPrize = new LevelPrize(levelPrizeLives, levelPrizeBonus)
    return new Level(levelId, levelChips, levelPrize)
  }

  static valueOf(level: Level): LevelRawModel {
    return {
      id: level.id.valueOf(),
      numberOfChips: level.numberOfChips.valueOf(),
      prize: level.levelPrize.valueOf(),
    }
  }
}

export { Level }
