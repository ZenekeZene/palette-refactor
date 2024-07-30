import { injectable } from 'tsyringe'
import { LevelsRepository } from '@gameContext/level/domain/repositories/LevelsRepository'
import type { LevelId } from '@gameContext/level/domain/models/level/LevelId'
import type { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'

@injectable()
class LevelsInMemoryRepository implements LevelsRepository {
  private levelsCollections: Map<string, LevelsCollection> = new Map()

  async saveInMemory(levelsCollection: LevelsCollection): Promise<void> {
    this.levelsCollections.set(levelsCollection.id.valueOf(), levelsCollection)
  }

  async searchById(id: LevelId): Promise<LevelsCollection | undefined> {
    return this.levelsCollections.get(id.valueOf())
  }
}

export { LevelsInMemoryRepository }
