import { inject, injectable } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { IPlayerRepository } from '@gameContext/player/domain/repositories/IPlayerRepository'
import { PlayerId } from '@gameContext/player/domain/models/PlayerId'
import { PlayerNotFoundException } from '@gameContext/player/domain/exceptions/PlayerNotFoundException'
import { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import { toPlayerResponse } from '@gameContext/player/application/mapper/PlayerMapper'
import { PassLevelRequest } from '@gameContext/player/application/dto/PassLevelRequest'

@injectable()
class PassLevelUseCase implements UseCase<PlayerResponse> {
  constructor(
    @inject(Types.IPlayerRepository) private repository: IPlayerRepository,
    private passLevelRequest: PassLevelRequest,
  ) {}

  async execute(): Promise<PlayerResponse> {
    const playerId = new PlayerId(this.passLevelRequest.playerId)
    const player = this.repository.findByPlayerId(playerId)
    if (!player) {
      throw new PlayerNotFoundException()
    }
    player.passLevel()
    this.repository.save(player)
    return Promise.resolve(toPlayerResponse(player))
  }
}

export { PassLevelUseCase }
