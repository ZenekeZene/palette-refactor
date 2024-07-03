import { LevelId } from '@gameContext/level/domain/LevelId'
import { PrizeId } from '@gameContext/shared/domain/PrizeId'
import { PrizeLives } from './PrizeLives'
import { PrizeBonus } from './PrizeBonus'

export interface PrizeRawModel {
  id: string
  lives: number
  bonus: number
  levelId: string
}

export class Prize {
  constructor(
    public readonly id: PrizeId,
    public readonly lives: PrizeLives,
    public readonly bonus: PrizeBonus,
    public readonly levelId: LevelId
  ) {}

  public static fromPrimitive(prize: PrizeRawModel) {
    const prizeId = new PrizeId(prize.id)
    const lives = new PrizeLives(prize.lives)
    const bonus = new PrizeBonus(prize.bonus)
    const levelId = new LevelId(prize.levelId)
    return new Prize(prizeId, lives, bonus, levelId)
  }

  public static toRaw(prize: Prize): PrizeRawModel {
    return {
      id: prize.id.toPrimitive(),
      lives: prize.lives.toPrimitive(),
      bonus: prize.bonus.toPrimitive(),
      levelId: prize.levelId.toPrimitive(),
    }
  }
}
