import { Table } from '@/domain/Table/Table'
import { LevelsRepository } from '@/infra/LevelsRepository/LevelsRepository'

interface UseCase<T> {
  execute: () => Promise<T>;
}

const StartGameUseCase = (): UseCase<Table> => ({
	execute: async (): Promise<Table> => {
		const repository = new LevelsRepository()
		const levelsConfig = await repository.getLevels()

		const table = new Table()
		table.generateLevels(levelsConfig)
		return table
	}
})

export { StartGameUseCase }
