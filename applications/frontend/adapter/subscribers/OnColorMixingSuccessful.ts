import { injectable } from 'tsyringe'
import { DomainEventClass } from '@gameContext/shared/domain/utils/DomainEvent'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { ColorMixingSuccessfulEvent } from '@gameContext/color/domain/events/ColorMixingSuccessfulEvent'
import { getStore } from '@frontend/adapter/store/useStore'

@injectable()
export class OnColorMixingSuccessful
  implements DomainEventSubscriber<ColorMixingSuccessfulEvent>
{
  subscribedTo(): Array<DomainEventClass> {
    return [ColorMixingSuccessfulEvent]
  }

  async on(domainEvent: ColorMixingSuccessfulEvent): Promise<void> {
    console.log('[OnColorMixingSuccessful]', domainEvent)
    const store = getStore()
    const state = store.getState()
    state.successColor()
    state.nextSwatchColor()
    state.successColor(domainEvent.mixed?.id.valueOf())
  }
}
