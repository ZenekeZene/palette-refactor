import { ILevelsRepository } from '@/domain/Level/ILevelsRepository'
import { Level } from '@/domain/Level/Level'

class LevelsRepository implements ILevelsRepository {
	async getLevels(): Promise<Level[]> {
		try {
			const LevelsConfig = await import('/config/Levels.yaml')
			return LevelsConfig.default.levels
		} catch (error) {
			console.error('Error loading levels config', error)
			return []
		}
	}
}

export { LevelsRepository }
