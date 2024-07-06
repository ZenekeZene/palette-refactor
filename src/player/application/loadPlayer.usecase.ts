import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { Player } from '@gameContext/player/domain/Player'
import type { IPlayerLoaderRepository } from '@gameContext/player/domain/IPlayerLoaderRepository'

export interface LoadPlayerUseCaseType extends UseCase<Player> {}

@injectable()
class LoadPlayerUseCase implements LoadPlayerUseCaseType {
  constructor(
    @inject(Types.IPlayerLoaderRepository) private repository: IPlayerLoaderRepository
  ) {}

  async execute(): Promise<Player> {
    const player = await this.repository.loadFromFile()
    return player
  }
}

export { LoadPlayerUseCase }
