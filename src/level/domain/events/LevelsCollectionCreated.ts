import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { Level } from '@gameContext/level/domain/models/level/Level'

type LevelsCollectionCreatedAttributes = {
  readonly levels: Level[]
}

class LevelsCollectionCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'levels.collection.created'

  readonly levels: Level[] = []

  constructor({
    aggregateId,
    levels,
    eventId,
    occurredOn,
  }: {
    aggregateId: string
    levels: Level[]
    eventId?: string
    occurredOn?: Date
  }) {
    super({
      eventName: LevelsCollectionCreatedDomainEvent.EVENT_NAME,
      aggregateId,
      eventId,
      occurredOn,
    })
    this.levels = levels
  }

  toPrimitives() {
    return {
      levels: this.levels.map((level) => level.valueOf()),
    }
  }

  static fromPrimitives(params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
    attributes: LevelsCollectionCreatedAttributes
  }): DomainEvent {
    const { aggregateId, eventId, occurredOn, attributes } = params
    return new LevelsCollectionCreatedDomainEvent({
      aggregateId,
      levels: attributes.levels,
      eventId,
      occurredOn,
    })
  }
}

export { LevelsCollectionCreatedDomainEvent }
