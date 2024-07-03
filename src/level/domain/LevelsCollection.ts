import { Level, LevelRawModel } from './Level'
import { PrizeRawModel } from '@gameContext/prize/domain/Prize'

export class LevelsCollection {
  private levels: Level[] = []

  constructor(_levels: LevelRawModel[] = [], _prizes: PrizeRawModel[] = []) {
    this.associatePrizesIdToLevels(_levels, _prizes)
  }

  private associatePrizesIdToLevels(_levels: LevelRawModel[], _prizes: PrizeRawModel[]): void {
    _levels.forEach((_level) => {
      const prizeId = this.getPrizeIdByLevelId(_prizes, _level.id)
      if (prizeId) {
        const level = Level.fromPrimitive(_level.id, _level.numberOfChips, prizeId)
        this.levels.push(level)
      }
    })
  }

  getLevels(): Level[] {
    return this.levels
  }

  private getPrizeIdByLevelId(_prizes: PrizeRawModel[], levelId: string): string | undefined {
    return _prizes.find((prize) => prize.levelId === levelId)?.id
  }

  forEach(callback: (level: Level) => void): void {
    return this.levels.forEach(callback)
  }
}
