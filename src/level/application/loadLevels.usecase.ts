import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import type { ILevelsLoaderRepository } from '@gameContext/level/domain/repositories/ILevelsLoaderRepository'
import type { ILevelsRepository } from '@gameContext/level/domain/repositories/ILevelsRepository'
import type { LevelsCollectionResponse } from './dto/LevelsCollectionResponse.dto'
import { toLevelsCollectionResponse } from './mapper/LevelsCollectionMapper'

@injectable()
class LoadLevelsUseCase implements UseCase<LevelsCollectionResponse> {
  constructor(
    @inject(Types.ILevelsLoaderRepository) private loaderLevelsRepository: ILevelsLoaderRepository,
    @inject(Types.ILevelsRepository) private levelsRepository: ILevelsRepository,
    // @inject(Types.IEventBus) private eventBus: IEventBus,
  ) {}

  async execute(): Promise<LevelsCollectionResponse> {
    try {
      const levelsRaw = await this.loaderLevelsRepository.loadAllFromFile()
      const levelsCollection = new LevelsCollection(levelsRaw)
      // this.eventBus.publish(levelsCollection.pullDomainEvents())
      this.levelsRepository.saveAllInMemory(levelsCollection)
      return toLevelsCollectionResponse(levelsCollection)
    } catch (error) {
      console.error('Error loading levels config', error)
      return toLevelsCollectionResponse(new LevelsCollection())
    }
  }
}

export { LoadLevelsUseCase };
