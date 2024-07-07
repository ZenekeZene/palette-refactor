import { LevelsCollection } from "@gameContext/level/domain/LevelsCollection"
import { LevelsCollectionResponse, LevelDTO } from "../dto/LevelsCollectionResponse.dto"

const toLevelsCollectionResponseDTO = (levelsCollection: LevelsCollection): LevelsCollectionResponse => {
  const levelsDTO: LevelDTO[] = levelsCollection.getLevels().map(level => {
    const prize = level.getLevelPrize().valueOf()
    return {
      id: level.getId().valueOf(),
      numberOfChips: level.getNumberOfChips().valueOf(),
      prize,
    }
  })
  return {
    levels: levelsDTO,
    totalLevels: levelsCollection.getNumberOfLevels(),
  }
}

export { toLevelsCollectionResponseDTO }
