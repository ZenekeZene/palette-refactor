import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { LevelsRepository } from '@gameContext/level/domain/repositories/LevelsRepository'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { LevelsCollectionResponse } from './dto/LevelsCollectionResponse'
import type { RegisterLevelsRequest } from './dto/RegisterLevelsRequest'
import { toLevelsCollectionResponse } from './mapper/LevelsCollectionMapper'

@injectable()
class RegisterLevels
  implements UseCase<RegisterLevelsRequest, LevelsCollectionResponse>
{
  constructor(
    @inject(Types.LevelsRepository) private levelsRepository: LevelsRepository,
  ) {}

  async execute(
    registerLevelsRequest: RegisterLevelsRequest,
  ): Promise<LevelsCollectionResponse> {
    const levelsId = registerLevelsRequest.levelsId
    const levelsRaw = registerLevelsRequest.levels
    const levelsCollection = new LevelsCollection(levelsRaw, levelsId)
    this.levelsRepository.saveInMemory(levelsCollection)
    return toLevelsCollectionResponse(levelsCollection)
  }
}

export { RegisterLevels }
