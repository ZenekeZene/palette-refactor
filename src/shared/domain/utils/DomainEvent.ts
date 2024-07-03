import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

abstract class DomainEvent {
  private readonly _eventId: string
  private readonly _occurredOn: Date

  constructor(private _aggregateId: string, eventId?: string, occurredOn?: Date) {
    this._eventId = eventId ? eventId: Uuid.random().toString()
    this._occurredOn = occurredOn ? occurredOn: new Date()
  }

  abstract eventName(): string;

  public aggregateId(): string {
    return this._aggregateId
  }

  public eventId(): string {
    return this._eventId
  }

  public occurredOn(): Date {
    return this._occurredOn
  }
}

export { DomainEvent }
