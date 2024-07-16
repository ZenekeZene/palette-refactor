import { LevelPrizeLives } from './LevelPrizeLives'
import { LevelPrizeBonus } from './LevelPrizeBonus'

export interface LevelPrizeRawModel {
  lives: number
  bonus: number
}

export class LevelPrize {
  constructor(
    public readonly lives: LevelPrizeLives,
    public readonly bonus: LevelPrizeBonus
  ) {}

  public static fromPrimitive(levelPrize: LevelPrizeRawModel): LevelPrize {
    const lives = new LevelPrizeLives(levelPrize.lives)
    const bonus = new LevelPrizeBonus(levelPrize.bonus)
    return new LevelPrize(lives, bonus)
  }

  valueOf(): LevelPrizeRawModel {
    return {
      lives: this.lives.valueOf(),
      bonus: this.bonus.valueOf(),
    }
  }
}
