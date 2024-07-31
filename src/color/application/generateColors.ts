import { inject, injectable } from 'tsyringe'
import { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import type { LevelsRepository } from '@gameContext/level/domain/repositories/LevelsRepository'
import { LevelsCollectionId } from '@gameContext/level/domain/LevelsCollectionId'
import { LevelId } from '@gameContext/level/domain/models/level/LevelId'
import { toGenerateColorsResponse } from './mapper/GenerateColorsMapper'
import { GenerateColorsResponse } from './dto/GenerateColorsResponse'
import { ColorGenerator } from '../domain/services/ColorGenerator'
import { GetNumberOfChipsOfLevelService } from '@gameContext/level/domain/services/GetNumberOfChipsOfLevelService'
import { ColorGroupCollection } from '../domain/ColorGroupCollection'
import { ColorGroupCollectionId } from '../domain/ColorGroupCollectionId'
import type { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import { GenerateColorsRequest } from './dto/GenerateColorsRequest'

@injectable()
export class GenerateColors
  implements UseCase<GenerateColorsRequest, GenerateColorsResponse>
{
  private getNumberOfChipsOfLevelService: GetNumberOfChipsOfLevelService

  constructor(
    @inject(Types.ColorMixerLogger) private logger: ColorMixerLogger,
    @inject(Types.LevelsRepository) private levelsRepository: LevelsRepository,
  ) {
    this.getNumberOfChipsOfLevelService = new GetNumberOfChipsOfLevelService(
      this.levelsRepository,
    )
  }

  async execute(
    generateColorsRequest: GenerateColorsRequest,
  ): Promise<GenerateColorsResponse> {
    const levelId = new LevelId(generateColorsRequest.levelId)
    const levelsCollectionId = new LevelsCollectionId(
      generateColorsRequest.levelsCollectionId,
    )
    const colorGroupsCountToGenerate =
      await this.getNumberOfChipsOfLevelService.findLevel(
        levelsCollectionId,
        levelId,
      )
    const colorGroups = new ColorGenerator(
      colorGroupsCountToGenerate,
    ).generate()
    const colorGroupCollection = new ColorGroupCollection(
      new ColorGroupCollectionId(),
      colorGroups,
      levelId,
    )
    colorGroupCollection.each(this.logger.logGroup.bind(this.logger))
    return toGenerateColorsResponse(colorGroupCollection)
  }
}
