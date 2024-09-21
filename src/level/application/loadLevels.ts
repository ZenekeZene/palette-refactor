import { injectable, inject } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { Loader } from '@gameContext/shared/domain/Loader'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import type { LevelsLoaderRepository } from '@gameContext/level/domain/repositories/LevelsLoaderRepository'
import type { LevelsCollectionResponse } from './dto/LevelsCollectionResponse'
import { toLevelsCollectionResponse } from './mapper/LevelsCollectionMapper'
import type { EventBus } from '@gameContext/shared/domain/utils/EventBus'

@injectable()
export class LoadLevels implements Loader {
  constructor(
    @inject(Types.LevelsLoaderRepository)
    private loaderLevelsRepository: LevelsLoaderRepository,
    @inject(Types.EventBus) private eventBus: EventBus,
  ) {}

  async execute(): Promise<LevelsCollectionResponse> {
    try {
      const levelsRaw = await this.loaderLevelsRepository.loadAllFromFile()
      const levelsCollection = new LevelsCollection(levelsRaw)
      this.eventBus.publish(levelsCollection.pullDomainEvents())
      return toLevelsCollectionResponse(levelsCollection)
    } catch (error) {
      console.error('Error loading levels config', error)
      throw new Error('Error loading levels config')
    }
  }
}
