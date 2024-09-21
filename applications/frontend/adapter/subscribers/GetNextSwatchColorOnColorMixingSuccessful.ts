import { injectable } from 'tsyringe'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { ColorMixingSuccessfulEvent } from '@gameContext/color/domain/events/ColorMixingSuccessfulEvent'
import { getStore } from '@frontend/adapter/store/useStore'
import { Class } from '@gameContext/shared/types/Class'
import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { isDebugMode } from '@frontend/infrastructure/isDebugMode'

@injectable()
export class GetNextSwatchColorOnColorMixingSuccessful
  implements DomainEventSubscriber<ColorMixingSuccessfulEvent>
{
  subscribedTo(): Class<DomainEvent<AggregateRoot>>[] {
    return [ColorMixingSuccessfulEvent]
  }

  async on(domainEvent: ColorMixingSuccessfulEvent): Promise<void> {
    if (isDebugMode) {
      console.log('[GetNextSwatchColorOnColorMixingSuccessful]', domainEvent)
    }
    const store = getStore()
    const state = store.getState()
    const { mixed } = domainEvent
    state.successColor(mixed.id)
    state.nextSwatchColor(mixed.swatchColor)
  }
}
