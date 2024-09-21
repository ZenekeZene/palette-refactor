import { injectable } from 'tsyringe'
import { LivesDecrementedEvent } from '@gameContext/player/domain/events/LivesDecrementedEvent'
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
export class TryAgainOnLivesDecremented
  implements DomainEventSubscriber<LivesDecrementedEvent>
{
  subscribedTo(): Class<DomainEvent<AggregateRoot>>[] {
    return [LivesDecrementedEvent]
  }

  async on(domainEvent: LivesDecrementedEvent): Promise<void> {
    const store = getStore()
    const decrementLives = store.getState().decrementLives
    decrementLives(domainEvent.livesDecremented)
    const event = createEvent(events.livesDecremented)
    dispatchEvent(event)
  }
}
