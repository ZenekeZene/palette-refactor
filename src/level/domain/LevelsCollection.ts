import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { LevelPrize } from './levelPrize/LevelPrize'
import { Level, LevelRawModel } from './level/Level'

export class LevelsCollection extends AggregateRoot {
  private levels: Level[] = []

  constructor(_levels: LevelRawModel[] = []) {
    super()
    this.generate(_levels)
  }

  private generate(_levels: LevelRawModel[]): void {
    _levels.forEach((_level): void => {
      const level = Level.fromPrimitive(_level.id, _level.numberOfChips, _level.prize)
      this.levels.push(level)
    })
  }

  getLevels(): Level[] {
    return this.levels
  }

  getNumberOfLevels(): number {
    return this.levels.length
  }

  getLevelPrizeByLevelId(levelId: string): LevelPrize | undefined {
    return this.levels.find((level) => level.getId().toPrimitive() === levelId)?.getLevelPrize()
  }

  forEach(callback: (level: Level) => void): void {
    return this.levels.forEach(callback)
  }
}
