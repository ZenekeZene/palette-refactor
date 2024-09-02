import { injectable, inject } from 'tsyringe'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { ColorMixingFailedEvent } from '@gameContext/color/domain/events/ColorMixingFailedEvent'
import { DomainEventClass } from '@gameContext/shared/domain/utils/DomainEvent'
import type { EventBus } from '@gameContext/shared/domain/utils/EventBus'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { PlayerRepository } from '../domain/repositories/PlayerRepository'
import { PlayerNotFoundException } from '../domain/exceptions/PlayerNotFoundException'
import { PlayerId } from '../domain/models/PlayerId'

@injectable()
export class OnColorMixingFailed
  implements DomainEventSubscriber<ColorMixingFailedEvent>
{
  constructor(
    @inject(Types.PlayerRepository) private repository: PlayerRepository,
    @inject(Types.EventBus) private eventBus: EventBus,
  ) {}

  subscribedTo(): DomainEventClass[] {
    return [ColorMixingFailedEvent]
  }

  async on(domainEvent: ColorMixingFailedEvent): Promise<void> {
    console.log('[OnColorMixingFailed] color mixing failed:', domainEvent)
    const playerId = new PlayerId(domainEvent.playerId)
    const player = this.repository.findById(playerId)
    if (!player) {
      throw new PlayerNotFoundException()
    }
    player.decrementLives()
    this.eventBus.publish(player.pullDomainEvents())
    this.repository.save(player)
  }
}
