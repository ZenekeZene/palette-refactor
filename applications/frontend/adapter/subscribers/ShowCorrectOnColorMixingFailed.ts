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
import { isDebugMode } from '@frontend/infrastructure/isDebugMode'

@injectable()
export class ShowCorrectOnColorMixingFailed
  implements DomainEventSubscriber<ColorMixingFailedEvent>
{
  subscribedTo(): Class<DomainEvent<AggregateRoot>>[] {
    return [ColorMixingFailedEvent]
  }

  async on(domainEvent: ColorMixingFailedEvent): Promise<void> {
    if (isDebugMode) {
      console.log('[ShowCorrectOnColorMixingFailed]', domainEvent)
    }
    const store = getStore()
    store.getState().failColor()
    const event = createEvent(events.colorMixFailure, {
      correctColorGroupId: domainEvent.correctColorGroupId,
    })
    dispatchEvent(event)
  }
}
