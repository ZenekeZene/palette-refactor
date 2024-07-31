import { LevelsRepository } from '../repositories/LevelsRepository'
import { LevelsCollectionId } from '../LevelsCollectionId'
import { LevelId } from '../models/level/LevelId'
import { LevelsCollectionNotFoundException } from '../exceptions/LevelsCollectionNotFoundException'
import { LevelNotFoundException } from '../exceptions/LevelNotFoundException'

export class GetNumberOfChipsOfLevelService {
  constructor(private levelsRepository: LevelsRepository) {}

  findLevel(levelsCollectionId: LevelsCollectionId, levelId: LevelId): number {
    const levelsCollection = this.levelsRepository.findById(levelsCollectionId)
    if (!levelsCollection) {
      throw new LevelsCollectionNotFoundException(levelsCollectionId)
    }

    const level = levelsCollection.searchLevelById(levelId)
    if (!level) {
      throw new LevelNotFoundException(levelsCollectionId, levelId)
    }

    return level.getNumberOfChips().valueOf()
  }
}
