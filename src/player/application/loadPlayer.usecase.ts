import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { Player } from '@gameContext/player/domain/Player'
import type { PlayerLoaderRepository } from '@gameContext/player/domain/repositories/PlayerLoaderRepository'
import type { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import { toPlayerResponse } from '@gameContext/player/application/mapper/PlayerMapper'
import { PlayerNotFoundException } from '@gameContext/player/domain/exceptions/PlayerNotFoundException'

@injectable()
class LoadPlayerUseCase implements UseCase<PlayerResponse> {
  constructor(
    @inject(Types.PlayerLoaderRepository) private loaderRepository: PlayerLoaderRepository,
  ) {}

  async execute(): Promise<PlayerResponse> {
    const playerRaw = await this.loaderRepository.loadFromFile()
    if (!playerRaw) {
      throw new PlayerNotFoundException()
    }
    const player = Player.fromPrimitives(playerRaw)
    return Promise.resolve(toPlayerResponse(player))
  }
}

export { LoadPlayerUseCase }
