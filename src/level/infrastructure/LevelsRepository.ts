import { ILevelsRepository } from '@gameContext/level/domain/ILevelsRepository'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'

class LevelsRepository implements ILevelsRepository {
  async getLevels(): Promise<LevelsCollection> {
    try {
      const LevelsConfig = await import('@resources/Levels.yaml')
      const levels = LevelsConfig.default.levels
      return LevelsCollection.fromArray(levels)
    } catch (error) {
      console.error('Error loading levels config', error)
      return new LevelsCollection()
    }
  }
}

export { LevelsRepository }
