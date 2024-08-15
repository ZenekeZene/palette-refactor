import { LevelsCollectionId } from '../LevelsCollectionId'

class LevelOutOfBounds extends Error {
  constructor(
    levelsCollectionId: LevelsCollectionId,
    levelIndex: number,
    levelsCollectionLevelLength: number,
  ) {
    super(
      `The collection of levels with id ${levelsCollectionId.valueOf()} has no level at the given index ${levelIndex}.
      The collection only has ${levelsCollectionLevelLength} levels.`,
    )
    this.name = 'LevelOutOfBounds'
  }
}

export { LevelOutOfBounds }
