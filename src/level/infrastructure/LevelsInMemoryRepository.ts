import { injectable } from "tsyringe"
import { ILevelsRepository } from '@gameContext/level/domain/ILevelsRepository'
import type { Level } from '@gameContext/level/domain/level/Level'
import type { LevelId } from '@gameContext/level/domain/level/LevelId'
import type { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'

@injectable()
class LevelsInMemoryRepository implements ILevelsRepository {
  private _levels: Map<LevelId, Level> = new Map()

  private add(level: Level) {
    this._levels.set(level.getId(), level)
  }

  async saveAllInMemory(levels: LevelsCollection): Promise<void> {
    levels.forEach((level) => this.add(level))
  }

  async searchById(id: LevelId): Promise<Level | undefined> {
    return this._levels.get(id)
  }
}

export { LevelsInMemoryRepository }
