import { injectable } from "tsyringe"
import { LevelsLoaderRepository } from "@gameContext/level/domain/repositories/LevelsLoaderRepository";
import type { LevelRawModel } from '@gameContext/level/domain/models/level/Level'

@injectable()
class LevelsLoaderFromFileRepository implements LevelsLoaderRepository {
  async loadAllFromFile(): Promise<LevelRawModel[]> {
    try {
      const LevelsConfig = await import('@resources/Levels.yaml')
      const levels = LevelsConfig.default.levels as Array<LevelRawModel>
      return levels
    } catch (error) {
      console.error('Error loading levels config', error)
      throw new Error('Error loading levels config')
    }
  }
}

export { LevelsLoaderFromFileRepository }
