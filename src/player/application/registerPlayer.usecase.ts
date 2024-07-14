import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { PlayerRepository } from '@gameContext/player/domain/repositories/PlayerRepository'
import { PlayerAlreadyExists } from '@gameContext/player//domain/exceptions/PlayerAlreadyExists'
import { Player } from '@gameContext/player/domain/Player'
import { PlayerId } from '@gameContext/player/domain/models/PlayerId'
import type { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import type { RegisterPlayerRequest } from '@gameContext/player/application/dto/RegisterPlayerRequest'
import { toPlayerResponse } from '@gameContext/player/application/mapper/PlayerMapper'

@injectable()
class RegisterPlayerUseCase implements UseCase<PlayerResponse> {
  constructor(
    @inject(Types.PlayerRepository) private repository: PlayerRepository,
    private registerPlayerRequest: RegisterPlayerRequest,
  ) {}

  async execute(): Promise<PlayerResponse> {
    const playerId = new PlayerId(this.registerPlayerRequest.playerId)
    const playerData = this.registerPlayerRequest.playerData
    const existingPlayer = this.repository.findByPlayerId(playerId);
    if (existingPlayer) {
      throw new PlayerAlreadyExists(playerId);
    }
    const player = Player.fromPrimitives(playerData, playerId)
    this.repository.create(player)
    return Promise.resolve(toPlayerResponse(player))
  }
}

export { RegisterPlayerUseCase }
