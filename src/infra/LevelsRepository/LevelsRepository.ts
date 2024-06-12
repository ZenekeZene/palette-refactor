import YAML from 'yaml'
import { ILevelsRepository } from '@/domain/Level/ILevelsRepository'
import { Level } from '@/domain/Level/Level'
import LevelsConfig from '@/domain/Level/Levels.yaml'

class LevelsRepository implements ILevelsRepository {
	getLevels(): Array<Level> {
		return LevelsConfig.levels
	}
}

export { LevelsRepository }
