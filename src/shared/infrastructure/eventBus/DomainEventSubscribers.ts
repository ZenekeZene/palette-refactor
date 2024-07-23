import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { DependencyContainer } from 'tsyringe'
import { DomainEvent } from '../../domain/utils/DomainEvent'
import { DomainEventSubscriber } from '../../domain/utils/DomainEventSubscriber'

export class DomainEventSubscribers {
  constructor(public items: Array<DomainEventSubscriber<DomainEvent>>) {}

  static from(container: DependencyContainer): DomainEventSubscribers {
    const subscribers = container.resolveAll<DomainEventSubscriber<DomainEvent>>(Types.DomainEventSubscribers)
    return new DomainEventSubscribers(subscribers)
  }
}
