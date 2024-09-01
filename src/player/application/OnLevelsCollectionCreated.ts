import { injectable } from 'tsyringe'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { LevelsCollectionCreatedEvent } from '@gameContext/level/domain/events/LevelsCollectionCreatedEvent'
import { DomainEventClass } from '@gameContext/shared/domain/utils/DomainEvent'

@injectable()
export class OnLevelsCollectionCreated
  implements DomainEventSubscriber<LevelsCollectionCreatedEvent>
{
  subscribedTo(): DomainEventClass[] {
    return [LevelsCollectionCreatedEvent]
  }

  async on(domainEvent: LevelsCollectionCreatedEvent): Promise<void> {
    console.log(
      '[OnLevelsCollectionCreated] Event of Level module:',
      domainEvent,
    )
  }
}
