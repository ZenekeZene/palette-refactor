import { DomainEvent } from './DomainEvent'

abstract class AggregateRoot {
  private domainEvents: DomainEvent[] = []

  public pullDomainEvents(): DomainEvent[] {
    const domainEvents = this.domainEvents
    this.domainEvents = []

    return domainEvents
  }

  protected record(domainEvent: DomainEvent): void {
    this.domainEvents.push(domainEvent)
  }
}

export { AggregateRoot }
