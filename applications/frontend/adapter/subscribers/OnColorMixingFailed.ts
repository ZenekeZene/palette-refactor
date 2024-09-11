import { injectable } from 'tsyringe'
import { DomainEventClass } from '@gameContext/shared/domain/utils/DomainEvent'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { ColorMixingFailedEvent } from '@gameContext/color/domain/events/ColorMixingFailedEvent'
import { getStore } from '@frontend/adapter/store/useStore'
import {
  events,
  createEvent,
  dispatchEvent,
} from '@frontend/adapter/events/events'

@injectable()
export class OnColorMixingFailed
  implements DomainEventSubscriber<ColorMixingFailedEvent>
{
  subscribedTo(): Array<DomainEventClass> {
    return [ColorMixingFailedEvent]
  }

  async on(domainEvent: ColorMixingFailedEvent): Promise<void> {
    console.log('[OnColorMixingFailed]', domainEvent)
    const store = getStore()
    store.getState().failColor()
    const event = createEvent(events.colorMixFailure, {
      // TODO: the domain event properties has to be primitives
      correctColorGroupId: domainEvent.correctMixed?.id.valueOf(),
    })
    dispatchEvent(event)
  }
}
