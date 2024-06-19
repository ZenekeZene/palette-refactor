import { UseCase } from '@/domain/shared/UseCase'
import { LevelsCollection } from '@/domain/Level/LevelsCollection'
import { ILevelsRepository } from '@/domain/Level/ILevelsRepository'

export type StartGameUseCaseExecution = Promise<LevelsCollection>

const StartGameUseCase = (repository: ILevelsRepository): UseCase<LevelsCollection> => ({
	execute: async (): StartGameUseCaseExecution => {
		const levelsCollection = await repository.getLevels()
		return levelsCollection
	}
})

export { StartGameUseCase }
