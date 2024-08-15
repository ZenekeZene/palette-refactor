import { injectable } from 'tsyringe'
import type { LevelsRepository } from '@gameContext/level/domain/repositories/LevelsRepository'
import type { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { Level } from '../domain/models/level/Level'
import { LevelsCollectionId } from '../domain/LevelsCollectionId'

@injectable()
class LevelsInMemoryRepository implements LevelsRepository {
  private levelsCollections: Map<string, LevelsCollection> = new Map()

  save(levelsCollection: LevelsCollection): void {
    this.levelsCollections.set(levelsCollection.id.valueOf(), levelsCollection)
  }

  findById(id: LevelsCollectionId): LevelsCollection | undefined {
    return this.levelsCollections.get(id.valueOf())
  }

  getLevelByIndex(
    levelCollectionId: LevelsCollectionId,
    levelIndex: number,
  ): Level | undefined {
    return this.findById(levelCollectionId)?.levels[levelIndex]
  }
}

export { LevelsInMemoryRepository }
