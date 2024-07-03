import { UseCase } from '@gameContext/shared/utils/UseCase'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { PrizesCollection } from '@gameContext/prize/domain/PrizesCollection'
import { ILevelsRepository } from '@gameContext/level/domain/ILevelsRepository'
import { IPrizesRepository } from '@gameContext/prize/domain/IPrizesRepository'

class LoadLevelsUseCase implements UseCase<LevelsCollection> {
  constructor(
    private levelsRepository: ILevelsRepository,
    private prizesRepository: IPrizesRepository
  ) {}

  async execute(): Promise<LevelsCollection> {
    const levelsRaw = await this.levelsRepository.loadAll()
    const prizesRaw = await this.prizesRepository.loadAll()
    const levelsCollection = new LevelsCollection(levelsRaw, prizesRaw)
    const prizesCollection = new PrizesCollection(prizesRaw)
    this.levelsRepository.saveAllInMemory(levelsCollection)
    this.prizesRepository.saveAllInMemory(prizesCollection)
    return levelsCollection
  }
}

export { LoadLevelsUseCase };
