import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { PlayerLives } from '../models/PlayerLives'

type DecrementedLivesEventAttributes = {
  readonly decrementedLives: PlayerLives
}

export class DecrementedLivesEvent extends DomainEvent {
  static readonly EVENT_NAME = 'player.decremented.lives'

  readonly decrementedLives: PlayerLives = new PlayerLives(1)

  constructor({
    aggregateId,
    decrementedLives,
    eventId,
    occurredOn,
  }: {
    aggregateId: string
    decrementedLives: PlayerLives
    eventId?: string
    occurredOn?: Date
  }) {
    super({
      eventName: DecrementedLivesEvent.EVENT_NAME,
      aggregateId,
      eventId,
      occurredOn,
    })
    this.decrementedLives = decrementedLives
  }

  toPrimitives() {
    return {
      eventName: DecrementedLivesEvent.EVENT_NAME,
      aggregateId: this.aggregateId,
      decrementedLives: this.decrementedLives.valueOf(),
      eventId: this.eventId,
      occurredOn: this.occurredOn.toISOString(),
    }
  }

  static fromPrimitives(params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
    attributes: DecrementedLivesEventAttributes
  }): DomainEvent {
    const { aggregateId, eventId, occurredOn, attributes } = params
    return new DecrementedLivesEvent({
      aggregateId,
      decrementedLives: attributes.decrementedLives,
      eventId,
      occurredOn,
    })
  }
}
