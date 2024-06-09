import { Level } from './Level'

type LevelsGeneratorProps = {
	numberOfLevels: number
}

export type Levels = Map<string, Level>

class LevelsGenerator {
	levels:Levels = new Map()
	numberOfLevels:number = 0

	constructor({ numberOfLevels }: LevelsGeneratorProps) {
		this.numberOfLevels = numberOfLevels
		this.generateLevels()
	}

	generateLevels() {
		for(let i = 0; i < this.numberOfLevels; i++) {
			const level = new Level({ index: i })
			this.levels.set(level.id, level)
		}
	}

	getLevels() {
		return this.levels
	}

	getNumberOfLevels() {
		return this.levels.size
	}
}

export { LevelsGenerator }
