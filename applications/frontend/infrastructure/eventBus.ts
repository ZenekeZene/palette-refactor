import { container } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import { EventBus } from '@gameContext/shared/domain/utils/EventBus'
import { DomainEventSubscribers } from '@gameContext/shared/infrastructure/eventBus/DomainEventSubscribers'

export function configureEventBus() {
  const eventBus = container.resolve<EventBus>(Types.EventBus)
  eventBus.addSubscribers(DomainEventSubscribers.from(container))
}
