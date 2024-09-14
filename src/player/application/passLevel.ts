import { inject, injectable } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { PlayerRepository } from '@gameContext/player/domain/repositories/PlayerRepository'
import { PlayerId } from '@gameContext/shared/domain/PlayerId'
import { PlayerNotFoundException } from '@gameContext/player/domain/exceptions/PlayerNotFoundException'
import { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import { toPlayerResponse } from '@gameContext/player/application/mapper/PlayerMapper'
import { PassLevelRequest } from '@gameContext/player/application/dto/PassLevelRequest'

@injectable()
class PassLevel implements UseCase<PassLevelRequest, PlayerResponse> {
  constructor(
    @inject(Types.PlayerRepository) private repository: PlayerRepository,
  ) {}

  execute(passLevelRequest: PassLevelRequest): PlayerResponse {
    const playerId = new PlayerId(passLevelRequest.playerId)
    const player = this.repository.findById(playerId)
    if (!player) {
      throw new PlayerNotFoundException()
    }
    player.passLevel()
    this.repository.save(player)
    return toPlayerResponse(player)
  }
}

export { PassLevel }
