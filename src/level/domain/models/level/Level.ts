import { Entity } from '@gameContext/shared/domain/utils/Entity'
import { LevelId } from '@gameContext/shared/domain/LevelId'
import { LevelPrizeBonus } from '../levelPrize/LevelPrizeBonus'
import { LevelPrizeLives } from '../levelPrize/LevelPrizeLives'
import { LevelPrize, LevelPrizePrimitive } from '../levelPrize/LevelPrize'
import { LevelChips } from './LevelChips'

export class Level extends Entity {
  private constructor(
    readonly id: LevelId,
    readonly numberOfChips: LevelChips,
    readonly levelPrize: LevelPrize,
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
    levelPrizeValue: LevelPrizePrimitive,
  ): Level {
    const levelId = new LevelId(id)
    const levelChips = new LevelChips(numberOfChips)
    const levelPrizeLives = new LevelPrizeLives(levelPrizeValue.lives)
    const levelPrizeBonus = new LevelPrizeBonus(levelPrizeValue.bonus)
    const levelPrize = new LevelPrize(levelPrizeLives, levelPrizeBonus)
    return new Level(levelId, levelChips, levelPrize)
  }

  toPrimitive() {
    return {
      id: this.id.valueOf(),
      numberOfChips: this.numberOfChips.valueOf(),
      prize: this.levelPrize.toPrimitive(),
    }
  }
}

export type LevelPrimitive = ReturnType<Level['toPrimitive']>
