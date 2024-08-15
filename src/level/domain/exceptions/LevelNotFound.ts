import { LevelId } from '../models/level/LevelId'
import { LevelsCollectionId } from '../LevelsCollectionId'

class LevelNotFound extends Error {
  constructor(levelsCollectionId: LevelsCollectionId, levelId: LevelId) {
    super(
      `Level with id ${levelId.valueOf()} not exists in collection ofs leve${levelsCollectionId.valueOf()}`,
    )
    this.name = 'LevelNotFound'
  }
}

class LevelNotFoundByIndex extends Error {
  constructor(levelsCollectionId: LevelsCollectionId, levelIndex: number) {
    super(
      `Level with index ${levelIndex} not exists in collection of levels ${levelsCollectionId.valueOf()}`,
    )
    this.name = 'LevelNotFoundByIndex'
  }
}

export { LevelNotFound, LevelNotFoundByIndex }
