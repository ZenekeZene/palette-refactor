import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { Level, LevelRawModel } from './Level'
import { PrizeRawModel } from '@gameContext/prize/domain/Prize'

export class LevelsCollection extends AggregateRoot {
  private levels: Level[] = []

  constructor(_levels: LevelRawModel[] = [], _prizes: PrizeRawModel[] = []) {
    super()
    this.associatePrizesIdToLevels(_levels, _prizes)
  }

  private associatePrizesIdToLevels(_levels: LevelRawModel[], _prizes: PrizeRawModel[]): void {
    _levels.forEach((_level): void => {
      const prizeId = this.getPrizeIdByLevelId(_prizes, _level.id)
      if (!prizeId) return
      const level = Level.fromPrimitive(_level.id, _level.numberOfChips, prizeId)
      this.levels.push(level)
    })
  }

  getLevels(): Level[] {
    return this.levels
  }

  getNumberOfLevels(): number {
    return this.levels.length
  }

  private getPrizeIdByLevelId(_prizes: PrizeRawModel[], levelId: string): string | undefined {
    return _prizes.find((prize) => prize.levelId === levelId)?.id
  }

  forEach(callback: (level: Level) => void): void {
    return this.levels.forEach(callback)
  }
}
