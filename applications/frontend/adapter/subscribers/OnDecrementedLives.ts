import { injectable } from 'tsyringe'
import { DecrementedLivesEvent } from '@gameContext/player/domain/events/DecrementedLivesEvent'
import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { getStore } from '@frontend/adapter/store/useStore'
import {
  events,
  createEvent,
  dispatchEvent,
} from '@frontend/adapter/events/events'
import { Class } from '@gameContext/shared/types/Class'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'

@injectable()
export class OnDecrementedLives
  implements DomainEventSubscriber<DecrementedLivesEvent>
{
  subscribedTo(): Class<DomainEvent<AggregateRoot>>[] {
    return [DecrementedLivesEvent]
  }

  async on(domainEvent: DecrementedLivesEvent): Promise<void> {
    const store = getStore()
    const decrementLives = store.getState().decrementLives
    // TODO: the domain event properties has to be primitives
    console.log(domainEvent.decrementedLives.valueOf())
    decrementLives(domainEvent.decrementedLives.valueOf())
    const event = createEvent(events.decrementedLives)
    dispatchEvent(event)
  }
}
