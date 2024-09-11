import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'

export class PlayerDead extends DomainEvent {
  static readonly EVENT_NAME = 'player.dead'

  constructor({
    aggregateId,
    eventId,
    occurredOn,
  }: {
    aggregateId: string
    eventId?: string
    occurredOn?: Date
  }) {
    super({
      eventName: PlayerDead.EVENT_NAME,
      aggregateId,
      eventId,
      occurredOn,
    })
  }

  toPrimitives() {
    return {
      eventName: PlayerDead.EVENT_NAME,
      aggregateId: this.aggregateId,
      eventId: this.eventId,
      occurredOn: this.occurredOn.toISOString(),
    }
  }

  static fromPrimitives(params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
  }): DomainEvent {
    const { aggregateId, eventId, occurredOn } = params
    return new PlayerDead({
      aggregateId,
      eventId,
      occurredOn,
    })
  }
}
