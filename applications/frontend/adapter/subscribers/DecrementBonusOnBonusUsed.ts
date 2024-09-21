import { injectable } from 'tsyringe'
import { BonusUsedEvent } from '@gameContext/player/domain/events/BonusUsedEvent'
import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { getStore } from '@frontend/adapter/store/useStore'
import { Class } from '@gameContext/shared/types/Class'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'

@injectable()
export class DecrementBonusOnBonusUsed
  implements DomainEventSubscriber<BonusUsedEvent>
{
  subscribedTo(): Class<DomainEvent<AggregateRoot>>[] {
    return [BonusUsedEvent]
  }

  async on(domainEvent: BonusUsedEvent): Promise<void> {
    const store = getStore()
    const { consumeBonus } = store.getState()
    consumeBonus(domainEvent.bonusUsed)
  }
}
