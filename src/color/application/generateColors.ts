import { inject, injectable } from 'tsyringe'
import { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { LevelsRepository } from '@gameContext/level/domain/repositories/LevelsRepository'
import { LevelsCollectionId } from '@gameContext/level/domain/LevelsCollectionId'
import { LevelId } from '@gameContext/shared/domain/LevelId'
import { PlayerId } from '@gameContext/shared/domain/PlayerId'
// TODO: Refactor this import from another module
import { GetNumberOfChipsOfLevelService } from '@gameContext/level/domain/services/GetNumberOfChipsOfLevelService'
import { ColorGenerator } from '../domain/services/ColorGenerator'
import { ColorGroupCollection } from '../domain/ColorGroupCollection'
import { ColorGroupCollectionId } from '../domain/ColorGroupCollectionId'
import type { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import type { ColorRepository } from '../domain/repositories/ColorRepository'
import { GenerateColorsResponse } from './dto/GenerateColorsResponse'
import { toGenerateColorsResponse } from './mapper/GenerateColorsMapper'
import { GenerateColorsRequest } from './dto/GenerateColorsRequest'

@injectable()
export class GenerateColors
  implements UseCase<GenerateColorsRequest, GenerateColorsResponse>
{
  private getNumberOfChipsOfLevelService: GetNumberOfChipsOfLevelService

  constructor(
    @inject(Types.ColorMixerLogger) private logger: ColorMixerLogger,
    @inject(Types.LevelsRepository) private levelsRepository: LevelsRepository,
    @inject(Types.ColorRepository) private colorRepository: ColorRepository,
  ) {
    this.getNumberOfChipsOfLevelService = new GetNumberOfChipsOfLevelService(
      this.levelsRepository,
    )
  }

  execute(
    generateColorsRequest: GenerateColorsRequest,
  ): GenerateColorsResponse {
    const levelId = new LevelId(generateColorsRequest.levelId)
    const levelsCollectionId = new LevelsCollectionId(
      generateColorsRequest.levelsCollectionId,
    )
    const playerId = new PlayerId(generateColorsRequest.playerId)
    const colorGroupsCountToGenerate =
      this.getNumberOfChipsOfLevelService.findLevel(levelsCollectionId, levelId)
    const colorGroups = new ColorGenerator(
      colorGroupsCountToGenerate,
    ).generate()
    const colorGroupCollection = new ColorGroupCollection(
      new ColorGroupCollectionId(),
      colorGroups,
      levelId,
      playerId,
    )
    this.colorRepository.save(colorGroupCollection)
    colorGroupCollection.each((colorGroup) => this.logger.logGroup(colorGroup))
    // TODO: change to domain event, not response
    return toGenerateColorsResponse(colorGroupCollection)
  }
}
