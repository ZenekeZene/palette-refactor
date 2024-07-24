import { DomainEventSubscriber } from "@gameContext/shared/domain/utils/DomainEventSubscriber";
import { LevelsCollectionCreatedDomainEvent } from "@gameContext/level/domain/events/LevelsCollectionCreated";
import { DomainEventClass } from "@gameContext/shared/domain/utils/DomainEvent";

export class OnLevelsCollectionCreated implements DomainEventSubscriber<LevelsCollectionCreatedDomainEvent> {
  subscribedTo(): DomainEventClass[] {
    return [LevelsCollectionCreatedDomainEvent];
  }

  async on(domainEvent: LevelsCollectionCreatedDomainEvent): Promise<void> {
    // console.log('[OnLevelsCollectionCreated] Event of Level module:', domainEvent);
  }
}
