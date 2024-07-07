import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import type { ILevelsLoaderRepository } from '@gameContext/level/domain/ILevelsLoaderRepository'
import type { ILevelsRepository } from '@gameContext/level/domain/ILevelsRepository'
import type { LevelsCollectionResponse } from './dto/LevelsCollectionResponse.dto'
import { toLevelsCollectionResponseDTO } from './mapper/LevelsCollectionMapper'

export interface LoadLevelsUseCaseType extends UseCase<LevelsCollectionResponse> {}

@injectable()
class LoadLevelsUseCase implements LoadLevelsUseCaseType {
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
      return toLevelsCollectionResponseDTO(levelsCollection)
    } catch (error) {
      console.error('Error loading levels config', error)
      return toLevelsCollectionResponseDTO(new LevelsCollection())
    }
  }
}

export { LoadLevelsUseCase };
