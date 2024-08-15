import { LevelsCollectionId } from '../LevelsCollectionId'

class LevelsCollectionNotFound extends Error {
  constructor(levelsCollectionId: LevelsCollectionId) {
    super(
      `Collection of levels with id ${levelsCollectionId.valueOf()} not exists}`,
    )
    this.name = 'LevelsCollectionNotFound'
  }
}

export { LevelsCollectionNotFound }
