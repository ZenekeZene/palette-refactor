import { inject, injectable } from 'tsyringe'
import { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { PlayerRepository } from '../domain/repositories/PlayerRepository'
import type { EventBus } from '@gameContext/shared/domain/utils/EventBus'

import { PlayerId } from '@gameContext/shared/domain/PlayerId'
import { PlayerNotFoundException } from '../domain/exceptions/PlayerNotFoundException'
import { UseBonusRequest } from './dto/UseBonusRequest'

@injectable()
export class UseBonus implements UseCase<UseBonusRequest> {
  constructor(
    @inject(Types.PlayerRepository) private repository: PlayerRepository,
    @inject(Types.EventBus) private eventBus: EventBus,
  ) {}

  execute(request: UseBonusRequest): void {
    const playerId = new PlayerId(request.playerId)
    const player = this.repository.findById(playerId)
    if (!player) {
      throw new PlayerNotFoundException()
    }
    player.useBonus()
    this.repository.save(player)
    this.eventBus.publish(player.pullDomainEvents())
  }
}
