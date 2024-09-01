import { injectable, inject } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { LevelsRepository } from '../domain/repositories/LevelsRepository'
import type { GetLevelRequest } from './dto/GetLevelRequest'
import type { GetLevelResponse } from './dto/GetLevelResponse'
import { LevelsCollectionId } from '../domain/LevelsCollectionId'
import { LevelNotFoundByIndex } from '../domain/exceptions/LevelNotFound'
import { toGetLevelResponse } from './mapper/GetLevelMapper'
import { LevelsCollectionNotFound } from '../domain/exceptions/LevelsCollectionNotFound'
import { LevelOutOfBounds } from '../domain/exceptions/LevelOutOfBounds'

@injectable()
export class GetLevel implements UseCase<GetLevelRequest, GetLevelResponse> {
  constructor(
    @inject(Types.LevelsRepository) private repository: LevelsRepository,
  ) {}

  execute(getLevelRequest: GetLevelRequest): GetLevelResponse {
    const { levelCollectionId: collectionId, levelIndex } = getLevelRequest
    const levelCollectionId = new LevelsCollectionId(collectionId)
    const levelCollection = this.repository.findById(levelCollectionId)
    if (!levelCollection) {
      throw new LevelsCollectionNotFound(levelCollectionId)
    }
    const numberOfLevels = levelCollection.getNumberOfLevels()
    if (numberOfLevels <= levelIndex) {
      throw new LevelOutOfBounds(levelCollectionId, levelIndex, numberOfLevels)
    }
    const level = this.repository.getLevelByIndex(levelCollectionId, levelIndex)
    if (!level) {
      throw new LevelNotFoundByIndex(levelCollectionId, levelIndex)
    }
    return toGetLevelResponse(level)
  }
}
