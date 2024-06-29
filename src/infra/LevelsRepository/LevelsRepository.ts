import { ILevelsRepository } from '@gameContext/domain/Level/ILevelsRepository'
import { LevelsCollection } from '@gameContext/domain/Level/LevelsCollection'

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
