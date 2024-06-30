import { UseCase } from '@gameContext/shared/UseCase'
import { LevelsCollection } from '@gameContext/domain/Level/LevelsCollection'
import { ILevelsRepository } from '@gameContext/domain/Level/ILevelsRepository'

export type StartGameUseCaseExecution = Promise<LevelsCollection>

const StartGameUseCase = (
  repository: ILevelsRepository
): UseCase<LevelsCollection> => ({
  execute: async (): StartGameUseCaseExecution => {
    const levelsCollection = await repository.getLevels()
    return levelsCollection
  },
})

export { StartGameUseCase }
