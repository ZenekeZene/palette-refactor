import { injectable, inject } from 'tsyringe'
import { DomainEventSubscriber } from '@gameContext/shared/domain/utils/DomainEventSubscriber'
import { ColorMixingFailed } from '@gameContext/color/domain/events/ColorMixingFailed'
import { DomainEventClass } from '@gameContext/shared/domain/utils/DomainEvent'
import type { PlayerRepository } from '../domain/repositories/PlayerRepository'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { PlayerNotFoundException } from '../domain/exceptions/PlayerNotFoundException'
import { PlayerId } from '../domain/models/PlayerId'

@injectable()
export class OnColorMixingFailed
  implements DomainEventSubscriber<ColorMixingFailed>
{
  constructor(
    @inject(Types.PlayerRepository) private repository: PlayerRepository,
  ) {}

  subscribedTo(): DomainEventClass[] {
    return [ColorMixingFailed]
  }

  async on(domainEvent: ColorMixingFailed): Promise<void> {
    console.log('[OnColorMixingFailed] color mixing failed:', domainEvent)
    const playerId = new PlayerId(domainEvent.playerId)
    const player = this.repository.findById(playerId)
    if (!player) {
      throw new PlayerNotFoundException()
    }
    player.decrementLives()
    this.repository.save(player)
  }
}
