import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { IPlayerLoaderRepository } from '@gameContext/player/domain/repositories/IPlayerLoaderRepository'
import type { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import { toPlayerResponse } from '@gameContext/player/application/mapper/PlayerMapper'
import { PlayerNotFoundException } from '@gameContext/player/domain/exceptions/PlayerNotFoundException'

@injectable()
class LoadPlayerUseCase implements UseCase<PlayerResponse> {
  constructor(
    @inject(Types.IPlayerLoaderRepository) private loaderRepository: IPlayerLoaderRepository,
  ) {}

  async execute(): Promise<PlayerResponse> {
    const player = await this.loaderRepository.loadFromFile()
    if (!player) {
      throw new PlayerNotFoundException()
    }
    return Promise.resolve(toPlayerResponse(player))
  }
}

export { LoadPlayerUseCase }
