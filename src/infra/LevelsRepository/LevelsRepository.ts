import { ILevelsRepository } from '@/domain/Level/ILevelsRepository'
import { LevelsCollection } from '@/domain/Level/LevelsCollection'

class LevelsRepository implements ILevelsRepository {
  async getLevels(): Promise<LevelsCollection> {
    try {
      const LevelsConfig = await import('/config/Levels.yaml')
      const levels = LevelsConfig.default.levels
      return LevelsCollection.fromArray(levels)
    } catch (error) {
      console.error('Error loading levels config', error)
      return new LevelsCollection()
    }
  }
}

export { LevelsRepository }
