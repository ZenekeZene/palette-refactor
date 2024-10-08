import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { AggregateRoot } from './AggregateRoot'

export abstract class DomainEvent<T extends AggregateRoot | AggregateRoot[]> {
  static EVENT_NAME: string
  readonly aggregate: T
  readonly data: unknown
  readonly eventId: string
  readonly occurredOn: Date
  readonly eventName: string

  constructor(params: { eventName: string; aggregate: T; data?: unknown }) {
    const { aggregate, eventName } = params
    this.aggregate = aggregate
    this.data = params.data
    this.eventId = Uuid.randomValue()
    this.occurredOn = new Date()
    this.eventName = eventName
  }
}
