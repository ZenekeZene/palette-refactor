import { UseCase } from '@gameContext/shared/utils/UseCase'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { ILevelsRepository } from '@gameContext/level/domain/ILevelsRepository'

export type LoadLevelsUseCaseExecution = Promise<LevelsCollection>

const LoadLevelsUseCase = (
  repository: ILevelsRepository
): UseCase<LevelsCollection> => ({
  execute: async (): LoadLevelsUseCaseExecution => {
    const levelsCollection = await repository.getLevels()
    return levelsCollection
  },
})

export { LoadLevelsUseCase }
