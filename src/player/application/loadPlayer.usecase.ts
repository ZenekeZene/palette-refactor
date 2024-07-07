import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { IPlayerLoaderRepository } from '@gameContext/player/domain/IPlayerLoaderRepository'
import type { PlayerResponse } from './dto/player.dto'
import { toPlayerResponseDTO } from './mapper/PlayerMapper'
import { PlayerNotFoundException } from '../domain/PlayerNotFoundException'

export interface LoadPlayerUseCaseType extends UseCase<PlayerResponse> {}

@injectable()
class LoadPlayerUseCase implements LoadPlayerUseCaseType {
  constructor(
    @inject(Types.IPlayerLoaderRepository) private loaderRepository: IPlayerLoaderRepository,
  ) {}

  async execute(): Promise<PlayerResponse> {
    const player = await this.loaderRepository.loadFromFile()
    if (!player) {
      throw new PlayerNotFoundException()
    }
    return Promise.resolve(toPlayerResponseDTO(player))
  }
}

export { LoadPlayerUseCase }
