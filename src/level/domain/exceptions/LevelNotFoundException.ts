import { LevelId } from '../models/level/LevelId'
import { LevelsCollectionId } from '../LevelsCollectionId'

class LevelNotFoundException extends Error {
  constructor(levelsCollectionId: LevelsCollectionId, levelId: LevelId) {
    super(
      `Level with id ${levelId.valueOf()} not exists in collection ofs leve${levelsCollectionId.valueOf()}`,
    )
    this.name = 'LevelNotFoundException'
  }
}

export { LevelNotFoundException }
