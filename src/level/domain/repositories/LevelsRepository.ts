import type { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { LevelsCollectionId } from '../LevelsCollectionId'
import { Level } from '../models/level/Level'

export interface LevelsRepository {
  save(levels: LevelsCollection): void
  findById(id: LevelsCollectionId): LevelsCollection | undefined
  getLevelByIndex(
    levelCollectionId: LevelsCollectionId,
    levelIndex: number,
  ): Level | undefined
}
