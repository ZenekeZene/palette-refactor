import { LevelsRepository } from '../repositories/LevelsRepository'
import { LevelsCollectionId } from '../LevelsCollectionId'
import { LevelId } from '../models/level/LevelId'
import { LevelsCollectionNotFound } from '../exceptions/LevelsCollectionNotFound'
import { LevelNotFound } from '../exceptions/LevelNotFound'

export class GetNumberOfChipsOfLevelService {
  constructor(private levelsRepository: LevelsRepository) {}

  findLevel(levelsCollectionId: LevelsCollectionId, levelId: LevelId): number {
    const levelsCollection = this.levelsRepository.findById(levelsCollectionId)
    if (!levelsCollection) {
      throw new LevelsCollectionNotFound(levelsCollectionId)
    }

    const level = levelsCollection.searchLevelById(levelId)
    if (!level) {
      throw new LevelNotFound(levelsCollectionId, levelId)
    }

    return level.getNumberOfChips().valueOf()
  }
}
