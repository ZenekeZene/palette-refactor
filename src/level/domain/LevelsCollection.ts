import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { LevelPrize } from './levelPrize/LevelPrize'
import { Level, LevelRawModel } from './level/Level'
import { LevelsCollectionCreated } from './events/LevelsCollectionCreated'

export class LevelsCollection extends AggregateRoot {
  private levels: Level[] = []
  private aggregateId: Uuid

  constructor(_levels: LevelRawModel[] = []) {
    super()
    this.aggregateId = Uuid.random()
    this.generate(_levels)
  }

  private generate(_levels: LevelRawModel[]): void {
    _levels.forEach((_level): void => {
      const level = Level.fromPrimitive(_level.id, _level.numberOfChips, _level.prize)
      this.levels.push(level)
    })
    this.recordLevelsCollectionCreated()
  }

  getLevels(): Level[] {
    return this.levels
  }

  getNumberOfLevels(): number {
    return this.levels.length
  }

  getLevelPrizeByLevelId(levelId: string): LevelPrize | undefined {
    return this.levels.find((level) => level.getId().valueOf() === levelId)?.getLevelPrize()
  }

  forEach(callback: (level: Level) => void): void {
    return this.levels.forEach(callback)
  }

  private recordLevelsCollectionCreated(): void {
    const levelsCollectionCreated = new LevelsCollectionCreated(this.levels, this.aggregateId.toPrimitive())
    this.record(levelsCollectionCreated)
  }
}
