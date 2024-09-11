import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { Level } from '@gameContext/level/domain/models/level/Level'
import { LevelsCollection } from '../LevelsCollection'

export class LevelsCollectionCreatedEvent extends DomainEvent<LevelsCollection> {
  static readonly EVENT_NAME = 'levels.collection.created'

  readonly levels: Level[] = []

  private constructor({
    aggregate,
    levels,
  }: {
    aggregate: LevelsCollection
    levels: Level[]
  }) {
    super({
      eventName: LevelsCollectionCreatedEvent.EVENT_NAME,
      aggregate,
    })
    this.levels = levels
  }

  public static of(args: {
    aggregate: LevelsCollection
    levels: Level[]
  }): DomainEvent<LevelsCollection> {
    return new LevelsCollectionCreatedEvent({
      aggregate: args.aggregate,
      levels: args.levels,
    })
  }
}
