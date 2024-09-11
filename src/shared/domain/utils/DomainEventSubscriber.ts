import { Class } from '@gameContext/shared/types/Class'
import { AggregateRoot } from './AggregateRoot'
import { DomainEvent } from './DomainEvent'

export interface DomainEventSubscriber<T extends DomainEvent<AggregateRoot>> {
  subscribedTo(): Class<DomainEvent<AggregateRoot>>[]
  on(domainEvent: T): Promise<void>
}
