import { Level } from '../Level/Level'
import { Prize } from '@/domain/Prize/Prize'

export type Levels = Map<string, Level>

class Table {
	private readonly levels:Levels = new Map()

	generateLevels(levelsConfig:any) {
		levelsConfig.map((levelConfig: Level) => {
			const { prize } = levelConfig
			const level = new Level({ numberOfChips: levelConfig.numberOfChips, prize: new Prize(prize) })
			this.levels.set(level.getId(), level)
		})
	}

	getLevels() {
		return this.levels
	}

	getNumberOfLevels() {
		return this.levels.size
	}
}

export { Table }
