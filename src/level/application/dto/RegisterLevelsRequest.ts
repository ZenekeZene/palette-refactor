import { LevelRawModel } from '@gameContext/level/domain/models/level/Level'
import { LevelDTO, LevelsCollectionResponse } from './LevelsCollectionResponse'

// TODO: esto es raro.
class RegisterLevelsRequest {
  public levels: LevelRawModel[] = []
  constructor(private readonly levelsCollectionResponse: LevelsCollectionResponse) {
    this.levels = this.levelsCollectionResponse.levels.map((level: LevelDTO) => (level as LevelRawModel))
  }
}

export { RegisterLevelsRequest }
