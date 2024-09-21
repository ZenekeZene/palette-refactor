import { injectable, inject } from 'tsyringe'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { ColorMixingFailedEvent } from '@gameContext/color/domain/events/ColorMixingFailedEvent'
import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import type { EventBus } from '@gameContext/shared/domain/utils/EventBus'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import { PlayerId } from '@gameContext/shared/domain/PlayerId'
import { Class } from '@gameContext/shared/types/Class'
import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import type { PlayerRepository } from '../domain/repositories/PlayerRepository'
import { PlayerNotFoundException } from '../domain/exceptions/PlayerNotFoundException'

@injectable()
export class DecrementLivesOnColorMixingFailed
  implements DomainEventSubscriber<ColorMixingFailedEvent>
{
  constructor(
    @inject(Types.PlayerRepository) private repository: PlayerRepository,
    @inject(Types.EventBus) private eventBus: EventBus,
  ) {}

  subscribedTo(): Class<DomainEvent<AggregateRoot>>[] {
    return [ColorMixingFailedEvent]
  }

  async on(domainEvent: ColorMixingFailedEvent): Promise<void> {
    const { aggregate } = domainEvent
    const playerId = new PlayerId(aggregate.playerId.valueOf())
    const player = this.repository.findById(playerId)
    if (!player) {
      throw new PlayerNotFoundException()
    }
    player.decrementLives()
    const domainEvents = player.pullDomainEvents()
    this.eventBus.publish(domainEvents)
    this.repository.save(player)
  }
}
