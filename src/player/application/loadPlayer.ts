import { injectable, inject } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { Loader } from '@gameContext/shared/domain/Loader'
import { Player } from '@gameContext/player/domain/Player'
import type { PlayerLoaderRepository } from '@gameContext/player/domain/repositories/PlayerLoaderRepository'
import type { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import { toPlayerResponse } from '@gameContext/player/application/mapper/PlayerMapper'
import { PlayerNotFoundException } from '@gameContext/player/domain/exceptions/PlayerNotFoundException'

@injectable()
class LoadPlayer implements Loader {
  constructor(
    @inject(Types.PlayerLoaderRepository)
    private loaderRepository: PlayerLoaderRepository,
  ) {}

  async execute(): Promise<PlayerResponse> {
    const playerRaw = await this.loaderRepository.loadFromFile()
    if (!playerRaw) {
      throw new PlayerNotFoundException()
    }
    const player = Player.createWithRandomId(playerRaw)
    return Promise.resolve(toPlayerResponse(player))
  }
}

export { LoadPlayer }
