import { LevelsCollectionId } from '../LevelsCollectionId'

class LevelsCollectionNotFoundException extends Error {
  constructor(levelsCollectionId: LevelsCollectionId) {
    super(
      `Collection of levels with id ${levelsCollectionId.valueOf()} not exists}`,
    )
    this.name = 'LevelsCollectionNotFoundException'
  }
}

export { LevelsCollectionNotFoundException }
