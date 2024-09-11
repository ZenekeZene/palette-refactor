import { injectable } from 'tsyringe'
import { PlayerDead } from '@gameContext/player/domain/events/PlayerDeadEvent'
import { DomainEventClass } from '@gameContext/shared/domain/utils/DomainEvent'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import {
  events,
  createEvent,
  dispatchEvent,
} from '@frontend/adapter/events/events'

@injectable()
export class OnPlayerDead implements DomainEventSubscriber<PlayerDead> {
  subscribedTo(): Array<DomainEventClass> {
    return [PlayerDead]
  }

  async on(): Promise<void> {
    const gameOverEvent = createEvent(events.gameOver)
    dispatchEvent(gameOverEvent)
  }
}
