import { LevelPrizeLives } from './LevelPrizeLives'
import { LevelPrizeBonus } from './LevelPrizeBonus'

export class LevelPrize {
  constructor(
    public readonly lives: LevelPrizeLives,
    public readonly bonus: LevelPrizeBonus,
  ) {}

  toPrimitive() {
    return {
      lives: this.lives.valueOf(),
      bonus: this.bonus.valueOf(),
    }
  }
}

export type LevelPrizePrimitive = ReturnType<LevelPrize['toPrimitive']>
