import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { Level } from '@gameContext/level/domain/models/level/Level'

class LevelsCollectionCreated extends DomainEvent {
  private readonly eventname = 'levelsCollectionCreated'
  private levels: Level[] = []

  constructor(levels: Level[], aggregateId: string) {
    super(aggregateId, Uuid.random().toString(), new Date())
    this.levels = levels
  }

  getLevels(): Level[] {
    return this.levels
  }

  eventName(): string {
    return this.eventname
  }
}

export { LevelsCollectionCreated }
