import { injectable } from 'tsyringe'
import type { LevelsRepository } from '@gameContext/level/domain/repositories/LevelsRepository'
import type { LevelId } from '@gameContext/level/domain/models/level/LevelId'
import type { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'

@injectable()
class LevelsInMemoryRepository implements LevelsRepository {
  private levelsCollections: Map<string, LevelsCollection> = new Map()

  save(levelsCollection: LevelsCollection): void {
    this.levelsCollections.set(levelsCollection.id.valueOf(), levelsCollection)
  }

  findById(id: LevelId): LevelsCollection | undefined {
    return this.levelsCollections.get(id.valueOf())
  }
}

export { LevelsInMemoryRepository }
