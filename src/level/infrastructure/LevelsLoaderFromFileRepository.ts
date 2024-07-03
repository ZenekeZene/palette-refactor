import { injectable } from "tsyringe"
import { ILevelsLoaderRepository } from "@gameContext/level/domain/ILevelsLoaderRepository";
import type { LevelRawModel } from '@gameContext/level/domain/level/Level'

@injectable()
class LevelsLoaderFromFileRepository implements ILevelsLoaderRepository {
  async loadAllFromFile(): Promise<LevelRawModel[]> {
    try {
      const LevelsConfig = await import('@resources/Levels.yaml')
      const levels = LevelsConfig.default.levels as Array<LevelRawModel>
      return levels
    } catch (error) {
      console.error('Error loading levels config', error)
      return new Array<LevelRawModel>()
    }
  }
}

export { LevelsLoaderFromFileRepository }
