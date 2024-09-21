import { inject, injectable } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { EventBus } from '@gameContext/shared/domain/utils/EventBus'
import { BonusUsedEvent } from '@gameContext/player/domain/events/BonusUsedEvent'
import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { Class } from '@gameContext/shared/types/Class'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { ColorGroupCollectionNotFound } from '../domain/exceptions/ColorGroupCollectionNotFound'
import type { ColorRepository } from '../domain/repositories/ColorRepository'

@injectable()
export class MixColorOnBonusUsed
  implements DomainEventSubscriber<BonusUsedEvent>
{
  constructor(
    @inject(Types.ColorRepository) private colorRepository: ColorRepository,
    @inject(Types.EventBus) private eventBus: EventBus,
  ) {}

  subscribedTo(): Class<DomainEvent<AggregateRoot>>[] {
    return [BonusUsedEvent]
  }

  async on(domainEvent: BonusUsedEvent): Promise<void> {
    const { aggregate } = domainEvent
    const { id: playerId, levelId } = aggregate
    const colorGroupCollection = this.colorRepository.findByPlayerIdAndLevelId(
      playerId,
      levelId,
    )
    if (!colorGroupCollection) {
      throw ColorGroupCollectionNotFound.ofPlayerIdAndLevelId(playerId, levelId)
    }
    colorGroupCollection.mixColorGroupPending()
    this.colorRepository.save(colorGroupCollection)
    this.eventBus.publish(colorGroupCollection.pullDomainEvents())
  }
}
