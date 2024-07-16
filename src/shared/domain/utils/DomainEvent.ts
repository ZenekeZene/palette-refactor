import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

abstract class DomainEvent {
  // private static FULL_QUALIFIED_EVENT_NAME:string
  private readonly eventId: string
  private readonly occurredOn: Date

  constructor(
    private aggregateId: string,
    eventId: string,
    occurredOn?: Date
  ) {
    this.eventId = eventId ? eventId : Uuid.random().toString()
    this.occurredOn = occurredOn ? occurredOn : new Date()
  }

  abstract eventName(): string

  public getAggregateId(): string {
    return this.aggregateId
  }

  public getEventId(): string {
    return this.eventId
  }

  public getOccurredOn(): Date {
    return this.occurredOn
  }
}

export { DomainEvent }
