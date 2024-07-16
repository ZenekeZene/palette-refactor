import { injectable } from 'tsyringe'
import { LevelsLoaderRepository } from '@gameContext/level/domain/repositories/LevelsLoaderRepository'
import type { LevelRawModel } from '@gameContext/level/domain/models/level/Level'

@injectable()
class LevelsLoaderFromFileRepository implements LevelsLoaderRepository {
  async loadAllFromFile(): Promise<LevelRawModel[]> {
    const LevelsConfig = await import('@resources/Levels.yaml')
    return LevelsConfig.default.levels as Array<LevelRawModel>
  }
}

export { LevelsLoaderFromFileRepository }
