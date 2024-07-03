import { injectable, inject } from 'tsyringe'
import type { UseCase } from '@gameContext/shared/utils/UseCase'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { PrizesCollection } from '@gameContext/prize/domain/PrizesCollection'
import type { ILevelsLoaderRepository } from '@gameContext/level/domain/ILevelsLoaderRepository'
import type { ILevelsRepository } from '@gameContext/level/domain/ILevelsRepository'
import type { IPrizesRepository } from '@gameContext/prize/domain/IPrizesRepository'

@injectable()
class LoadLevelsUseCase implements UseCase<LevelsCollection> {
  constructor(
    @inject('ILevelsLoaderRepository') private loaderLevelsRepository: ILevelsLoaderRepository,
    @inject('ILevelsRepository') private levelsRepository: ILevelsRepository,
    @inject('IPrizesRepository') private prizesRepository: IPrizesRepository
  ) {}

  async execute(): Promise<LevelsCollection> {
    try {
      const levelsRaw = await this.loaderLevelsRepository.loadAllFromFile()
      const prizesRaw = await this.prizesRepository.loadAllFromFile()

      const levelsCollection = new LevelsCollection(levelsRaw, prizesRaw)
      const prizesCollection = new PrizesCollection(prizesRaw)

      this.levelsRepository.saveAllInMemory(levelsCollection)
      this.prizesRepository.saveAllInMemory(prizesCollection)

      return levelsCollection
    } catch (error) {
      console.error('Error loading levels config', error)
      return new LevelsCollection()
    }
  }
}

export { LoadLevelsUseCase };
