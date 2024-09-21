import { injectable } from 'tsyringe'
import { LevelsLoaderRepository } from '@gameContext/level/domain/repositories/LevelsLoaderRepository'
import type { LevelPrimitive } from '@gameContext/level/domain/models/level/Level'

@injectable()
class LevelsLoaderFromFileRepository implements LevelsLoaderRepository {
  async loadAllFromFile(): Promise<LevelPrimitive[]> {
    const LevelsConfig = await import('@resources/Levels.yaml')
    return LevelsConfig.default.levels as Array<LevelPrimitive>
  }
}

export { LevelsLoaderFromFileRepository }
