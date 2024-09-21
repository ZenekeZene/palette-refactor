import { injectable } from 'tsyringe'
import { PlayerDead } from '@gameContext/player/domain/events/PlayerDeadEvent'
import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { Class } from '@gameContext/shared/types/Class'
import {
  events,
  createEvent,
  dispatchEvent,
} from '@frontend/adapter/events/events'

@injectable()
export class GameOverOnPlayerDead implements DomainEventSubscriber<PlayerDead> {
  subscribedTo(): Class<DomainEvent<AggregateRoot>>[] {
    return [PlayerDead]
  }

  async on(): Promise<void> {
    const gameOverEvent = createEvent(events.gameOver)
    dispatchEvent(gameOverEvent)
  }
}
