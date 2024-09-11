import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { AggregateRoot } from './AggregateRoot'

export abstract class DomainEvent<T extends AggregateRoot | AggregateRoot[]> {
  static EVENT_NAME: string
  readonly aggregate: T
  readonly eventId: string
  readonly occurredOn: Date
  readonly eventName: string

  constructor(params: { eventName: string; aggregate: T }) {
    const { aggregate, eventName } = params
    this.aggregate = aggregate
    this.eventId = Uuid.random().valueOf()
    this.occurredOn = new Date()
    this.eventName = eventName
  }
}
