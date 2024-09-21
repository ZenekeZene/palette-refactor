import { injectable } from 'tsyringe'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { ColorMixingSuccessfulEvent } from '@gameContext/color/domain/events/ColorMixingSuccessfulEvent'
import { getStore } from '@frontend/adapter/store/useStore'
import { Class } from '@gameContext/shared/types/Class'
import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'

@injectable()
export class OnColorMixingSuccessful
  implements DomainEventSubscriber<ColorMixingSuccessfulEvent>
{
  subscribedTo(): Class<DomainEvent<AggregateRoot>>[] {
    return [ColorMixingSuccessfulEvent]
  }

  async on(domainEvent: ColorMixingSuccessfulEvent): Promise<void> {
    console.log('[OnColorMixingSuccessful]', domainEvent)
    const store = getStore()
    const state = store.getState()
    state.successColor()
    state.nextSwatchColor(domainEvent.mixed)
    state.successColor(domainEvent.mixed?.id.valueOf())
  }
}
