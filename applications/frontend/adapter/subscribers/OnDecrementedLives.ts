import { injectable } from 'tsyringe'
import { DecrementedLivesEvent } from '@gameContext/player/domain/events/DecrementedLivesEvent'
import { DomainEventClass } from '@gameContext/shared/domain/utils/DomainEvent'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { getStore } from '@frontend/adapter/store/useStore'
import {
  events,
  createEvent,
  dispatchEvent,
} from '@frontend/adapter/events/events'

@injectable()
export class OnDecrementedLives
  implements DomainEventSubscriber<DecrementedLivesEvent>
{
  subscribedTo(): Array<DomainEventClass> {
    return [DecrementedLivesEvent]
  }

  async on(domainEvent: DecrementedLivesEvent): Promise<void> {
    const store = getStore()
    const decrementLives = store.getState().decrementLives
    // TODO: the domain event properties has to be primitives
    decrementLives(domainEvent.decrementedLives.valueOf())
    const event = createEvent(events.decrementedLives)
    dispatchEvent(event)
  }
}
