import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import type { ILevelsLoaderRepository } from '@gameContext/level/domain/ILevelsLoaderRepository'
import type { ILevelsRepository } from '@gameContext/level/domain/ILevelsRepository'

export interface LoadLevelsUseCaseType extends UseCase<LevelsCollection> {}

@injectable()
class LoadLevelsUseCase implements UseCase<LevelsCollection> {
  constructor(
    @inject(Types.ILevelsLoaderRepository) private loaderLevelsRepository: ILevelsLoaderRepository,
    @inject(Types.ILevelsRepository) private levelsRepository: ILevelsRepository,
    // @inject(Types.IEventBus) private eventBus: IEventBus,
  ) {}

  async execute(): Promise<LevelsCollection> {
    try {
      const levelsRaw = await this.loaderLevelsRepository.loadAllFromFile()
      const levelsCollection = new LevelsCollection(levelsRaw)
      // this.eventBus.publish(levelsCollection.pullDomainEvents())
      this.levelsRepository.saveAllInMemory(levelsCollection)
      return levelsCollection
    } catch (error) {
      console.error('Error loading levels config', error)
      return new LevelsCollection()
    }
  }
}

export { LoadLevelsUseCase };
