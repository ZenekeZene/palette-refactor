import { Table } from '@/domain/Table/Table'
import { LevelsRepository } from '@/infra/LevelsRepository/LevelsRepository'

interface UseCase<T> {
  execute: () => T;
}

const StartGame = (): UseCase<Table>=> ({
	execute: (): Table => {
		const levelsConfig = new LevelsRepository().getLevels()

		const table = new Table()
		table.generateLevels(levelsConfig)
		return table
	}
})

export { StartGame }
