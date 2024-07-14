import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { Loader } from '@gameContext/shared/domain/Loader'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import type { LevelsLoaderRepository } from '@gameContext/level/domain/repositories/LevelsLoaderRepository'
import type { LevelsCollectionResponse } from './dto/LevelsCollectionResponse'
import { toLevelsCollectionResponse } from './mapper/LevelsCollectionMapper'

@injectable()
class LoadLevelsUseCase implements Loader<LevelsCollectionResponse> {
  constructor(
    @inject(Types.LevelsLoaderRepository) private loaderLevelsRepository: LevelsLoaderRepository,
    // @inject(Types.IEventBus) private eventBus: IEventBus,
  ) {}

  async execute(): Promise<LevelsCollectionResponse> {
    try {
      const levelsRaw = await this.loaderLevelsRepository.loadAllFromFile()
      const levelsCollection = new LevelsCollection(levelsRaw)
      // this.eventBus.publish(levelsCollection.pullDomainEvents())
      return toLevelsCollectionResponse(levelsCollection)
    } catch (error) {
      console.error('Error loading levels config', error)
      throw new Error('Error loading levels config')
    }
  }
}

export { LoadLevelsUseCase };
