import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

abstract class DomainEvent {
  static EVENT_NAME: string
  static fromPrimitives: (params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
    attributes: DomainEventAttributes
  }) => DomainEvent

  readonly aggregateId: string
  readonly eventId: string
  readonly occurredOn: Date
  readonly eventName: string

  constructor(params: {
    eventName: string
    aggregateId: string
    eventId?: string
    occurredOn?: Date
  }) {
    const { aggregateId, eventName, eventId, occurredOn } = params
    this.aggregateId = aggregateId
    this.eventId = eventId || Uuid.random().valueOf()
    this.occurredOn = occurredOn || new Date()
    this.eventName = eventName
  }

  abstract toPrimitives(): any
}

export type DomainEventClass = {
  EVENT_NAME: string
  fromPrimitives(params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
    attributes: DomainEventAttributes
  }): DomainEvent
}

type DomainEventAttributes = any

export { DomainEvent }
