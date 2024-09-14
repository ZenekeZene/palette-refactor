import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { LevelPrize } from '@gameContext/level/domain/models/levelPrize/LevelPrize'
import {
  Level,
  LevelRawModel,
} from '@gameContext/level/domain/models/level/Level'
import { LevelsCollectionCreatedEvent } from '@gameContext/level/domain/events/LevelsCollectionCreatedEvent'
import { LevelId } from '@gameContext/shared/domain/LevelId'
import { LevelsCollectionId } from './LevelsCollectionId'

export class LevelsCollection extends AggregateRoot {
  readonly levels: Level[] = []
  readonly id: LevelsCollectionId

  constructor(initialLevels: LevelRawModel[] = [], id?: LevelsCollectionId) {
    super()
    this.id = id ? id : new LevelsCollectionId()
    this.generate(initialLevels)
  }

  private generate(initialLevels: LevelRawModel[]): void {
    initialLevels.forEach((initialLevel): void => {
      const { id, numberOfChips, prize } = initialLevel
      const level = Level.fromPrimitive(id, numberOfChips, prize)
      this.levels.push(level)
    })
    this.recordLevelsCollectionCreated()
  }

  searchLevelById(levelId: LevelId): Level | undefined {
    return this.levels.find((level) => level.id.valueOf() === levelId.valueOf())
  }

  getLevels(): Level[] {
    return this.levels
  }

  getNumberOfLevels(): number {
    return this.levels.length
  }

  getLevelPrizeByLevelId(levelId: string): LevelPrize | undefined {
    return this.levels
      .find((level) => level.id.valueOf() === levelId)
      ?.getLevelPrize()
  }

  forEach(callback: (level: Level) => void): void {
    return this.levels.forEach(callback)
  }

  private recordLevelsCollectionCreated(): void {
    const levelsCollectionCreated = LevelsCollectionCreatedEvent.of({
      aggregate: this,
      levels: this.levels,
    })
    this.record(levelsCollectionCreated)
  }
}
