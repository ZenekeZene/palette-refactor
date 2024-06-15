import { Table } from '@/domain/Table/Table'
import { ILevelsRepository } from '@/domain/Level/ILevelsRepository'

interface UseCase<T> {
  execute: () => Promise<T>;
}

const StartGameUseCase = (repository: ILevelsRepository): UseCase<Table> => ({
	execute: async (): Promise<Table> => {
		const levelsConfig = await repository.getLevels()

		const table = new Table()
		table.generateLevels(levelsConfig)
		return table
	}
})

export { StartGameUseCase }
