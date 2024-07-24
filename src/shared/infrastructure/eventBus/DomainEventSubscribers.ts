import { DependencyContainer } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { DomainEvent } from '../../domain/utils/DomainEvent'
import { DomainEventSubscriber } from '../../domain/utils/DomainEventSubscriber'

type Subscriber = DomainEventSubscriber<DomainEvent>

export class DomainEventSubscribers {
  constructor(public items: Array<Subscriber>) {}

  static from(container: DependencyContainer): DomainEventSubscribers {
    const subscribers = container.resolveAll<Subscriber>(
      Types.DomainEventSubscribers,
    )
    return new DomainEventSubscribers(subscribers)
  }
}
