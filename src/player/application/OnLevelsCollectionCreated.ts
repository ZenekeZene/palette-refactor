import { injectable } from 'tsyringe'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { LevelsCollectionCreatedEvent } from '@gameContext/level/domain/events/LevelsCollectionCreatedEvent'
import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { Class } from '@gameContext/shared/types/Class'

@injectable()
export class OnLevelsCollectionCreated
  implements DomainEventSubscriber<LevelsCollectionCreatedEvent>
{
  subscribedTo(): Class<DomainEvent<AggregateRoot>>[] {
    return [LevelsCollectionCreatedEvent]
  }

  async on(domainEvent: LevelsCollectionCreatedEvent): Promise<void> {
    console.log(
      '[OnLevelsCollectionCreated] Event of Level module:',
      domainEvent,
    )
  }
}
