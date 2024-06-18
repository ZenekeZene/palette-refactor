import { Level } from '../Level/Level'
import { Prize } from '@/domain/Prize/Prize'
import { Id } from '@/domain/shared/Id'

export type Levels = Map<Id, Level>

class Table {
	private readonly levels:Levels = new Map()

	generateLevels(levelsConfig:any) {
		levelsConfig.map((levelConfig: Level) => {
			const { prize } = levelConfig
			const level = new Level({ numberOfChips: levelConfig.numberOfChips, prize: new Prize(prize) })
			this.levels.set(level.id, level)
		})
	}

	getLevels() {
		return this.levels
	}

	getNumberOfLevels() {
		return this.levels.size || 0
	}
}

export { Table }
