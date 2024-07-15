import { injectable } from "tsyringe"
import { LevelsRepository } from '@gameContext/level/domain/repositories/LevelsRepository'
import type { Level } from '@gameContext/level/domain/models/level/Level'
import type { LevelId } from '@gameContext/level/domain/models/level/LevelId'
import type { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'

@injectable()
class LevelsInMemoryRepository implements LevelsRepository {
  private levels: Map<LevelId, Level> = new Map()

  private add(level: Level) {
    this.levels.set(level.getId(), level)
  }

  async saveInMemory(levels: LevelsCollection): Promise<void> {
    levels.forEach((level) => this.add(level))
  }

  async searchById(id: LevelId): Promise<Level | undefined> {
    return this.levels.get(id)
  }
}

export { LevelsInMemoryRepository }
