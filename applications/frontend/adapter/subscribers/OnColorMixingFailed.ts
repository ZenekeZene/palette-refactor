import { injectable } from 'tsyringe'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { ColorMixingFailedEvent } from '@gameContext/color/domain/events/ColorMixingFailedEvent'
import { getStore } from '@frontend/adapter/store/useStore'
import {
  events,
  createEvent,
  dispatchEvent,
} from '@frontend/adapter/events/events'
import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { Class } from '@gameContext/shared/types/Class'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'

@injectable()
export class OnColorMixingFailed
  implements DomainEventSubscriber<ColorMixingFailedEvent>
{
  subscribedTo(): Class<DomainEvent<AggregateRoot>>[] {
    return [ColorMixingFailedEvent]
  }

  async on(domainEvent: ColorMixingFailedEvent): Promise<void> {
    console.log('[OnColorMixingFailed]', domainEvent)
    const store = getStore()
    store.getState().failColor()
    // TODO: the domain event properties has to be primitives
    const correctMixed = domainEvent.aggregate.searchCorrectColorGroup(
      domainEvent.swatchColorId,
    )
    // TODO: change the event name to colorMixingFailed
    const event = createEvent(events.colorMixFailure, {
      correctColorGroupId: correctMixed.id.valueOf(),
    })
    dispatchEvent(event)
  }
}
