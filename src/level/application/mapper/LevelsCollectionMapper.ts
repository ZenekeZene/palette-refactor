import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import {
  LevelsCollectionResponse,
} from '@gameContext/level/application/dto/LevelsCollectionResponse'
import { LevelDTO } from '@gameContext/level/application/dto/LevelDTO'

const toLevelsCollectionResponse = (
  levelsCollection: LevelsCollection
): LevelsCollectionResponse => {
  const levelsDTO: LevelDTO[] = levelsCollection.getLevels().map((level) => {
    const prize = level.getLevelPrize().valueOf()
    return {
      id: level.getId().valueOf(),
      numberOfChips: level.getNumberOfChips().valueOf(),
      prize,
    }
  })
  return {
    items: levelsDTO,
    totalLevels: levelsCollection.getNumberOfLevels(),
  }
}

export { toLevelsCollectionResponse }
