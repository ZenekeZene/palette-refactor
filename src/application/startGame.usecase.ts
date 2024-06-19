import { UseCase } from '@/domain/shared/UseCase'
import { Table } from '@/domain/Table/Table'
import { ILevelsRepository } from '@/domain/Level/ILevelsRepository'

export type StartGameUseCaseExecution = Promise<Table>

const StartGameUseCase = (repository: ILevelsRepository): UseCase<Table> => ({
	execute: async (): StartGameUseCaseExecution => {
		const levelsConfig = await repository.getLevels()

		const table = new Table()
		table.generateLevels(levelsConfig)
		return table
	}
})

export { StartGameUseCase }
