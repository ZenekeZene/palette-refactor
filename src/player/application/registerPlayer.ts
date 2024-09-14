import { injectable, inject } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { PlayerRepository } from '@gameContext/player/domain/repositories/PlayerRepository'
import { PlayerAlreadyExists } from '@gameContext/player//domain/exceptions/PlayerAlreadyExists'
import { Player } from '@gameContext/player/domain/Player'
import { PlayerId } from '@gameContext/shared/domain/PlayerId'
import type { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import type { RegisterPlayerRequest } from '@gameContext/player/application/dto/RegisterPlayerRequest'
import { toPlayerResponse } from '@gameContext/player/application/mapper/PlayerMapper'

@injectable()
class RegisterPlayer implements UseCase<RegisterPlayerRequest, PlayerResponse> {
  constructor(
    @inject(Types.PlayerRepository) private repository: PlayerRepository,
  ) {}

  execute(registerPlayerRequest: RegisterPlayerRequest): PlayerResponse {
    const playerId = new PlayerId(registerPlayerRequest.playerId)
    const playerData = registerPlayerRequest.playerData
    const existingPlayer = this.repository.findById(playerId)
    if (existingPlayer) {
      throw new PlayerAlreadyExists(playerId)
    }
    const player = Player.fromPrimitives(playerData, playerId)
    this.repository.save(player)
    return toPlayerResponse(player)
  }
}

export { RegisterPlayer }
