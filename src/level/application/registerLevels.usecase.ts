import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { ILevelsRepository } from '@gameContext/level/domain/repositories/ILevelsRepository'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { LevelsCollectionResponse } from './dto/LevelsCollectionResponse'
import type { RegisterLevelsRequest } from './dto/RegisterLevelsRequest'
import { toLevelsCollectionResponse } from './mapper/LevelsCollectionMapper'

@injectable()
class RegisterLevelsUseCase implements UseCase<LevelsCollectionResponse> {
  constructor(
    @inject(Types.ILevelsRepository) private levelsRepository: ILevelsRepository,
    private registerLevelsRequest: RegisterLevelsRequest,
  ) {}

  async execute(): Promise<LevelsCollectionResponse> {
    const levelsRaw = this.registerLevelsRequest.levels
    const levelsCollection = new LevelsCollection(levelsRaw)
    this.levelsRepository.saveAllInMemory(levelsCollection)
    return toLevelsCollectionResponse(levelsCollection)
  }
}

export { RegisterLevelsUseCase }
