import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { LevelPrize } from '@gameContext/level/domain/models/levelPrize/LevelPrize'
import {
  Level,
  LevelRawModel,
} from '@gameContext/level/domain/models/level/Level'
import { LevelsCollectionCreatedDomainEvent } from '@gameContext/level/domain//events/LevelsCollectionCreated'

export class LevelsCollection extends AggregateRoot {
  readonly levels: Level[] = []
  readonly id: string

  constructor(initialLevels: LevelRawModel[] = [], id?: string) {
    super()
    this.id = id ? id : Uuid.random().valueOf()
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
    const levelsCollectionCreated = new LevelsCollectionCreatedDomainEvent({
      aggregateId: this.id.valueOf(),
      levels: this.levels,
      eventId: Uuid.random().valueOf(),
      occurredOn: new Date(),
    })
    this.record(levelsCollectionCreated)
  }
}
