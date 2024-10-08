import { injectable, inject } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { LevelsRepository } from '@gameContext/level/domain/repositories/LevelsRepository'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { LevelsCollectionResponse } from './dto/LevelsCollectionResponse'
import type { RegisterLevelsRequest } from './dto/RegisterLevelsRequest'
import { toLevelsCollectionResponse } from './mapper/LevelsCollectionMapper'
import { LevelsCollectionId } from '../domain/LevelsCollectionId'

@injectable()
class RegisterLevels
  implements UseCase<RegisterLevelsRequest, LevelsCollectionResponse>
{
  constructor(
    @inject(Types.LevelsRepository) private levelsRepository: LevelsRepository,
  ) {}

  execute(
    registerLevelsRequest: RegisterLevelsRequest,
  ): LevelsCollectionResponse {
    const levelsId = registerLevelsRequest.levelsId
    const levelsRaw = registerLevelsRequest.levels
    const levelsCollection = new LevelsCollection(
      levelsRaw,
      new LevelsCollectionId(levelsId),
    )
    this.levelsRepository.save(levelsCollection)
    return toLevelsCollectionResponse(levelsCollection)
  }
}

export { RegisterLevels }
