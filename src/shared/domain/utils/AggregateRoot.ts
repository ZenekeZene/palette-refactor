import { DomainEvent } from './DomainEvent'

export abstract class AggregateRoot {
  private domainEvents: DomainEvent<AggregateRoot>[] = []

  public pullDomainEvents(): DomainEvent<AggregateRoot>[] {
    const domainEvents = this.domainEvents
    this.domainEvents = []

    return domainEvents
  }

  protected record(domainEvent: DomainEvent<AggregateRoot>): void {
    this.domainEvents.push(domainEvent)
  }
}
