import { inject, injectable } from 'tsyringe'
import { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import type { LevelsRepository } from '@gameContext/level/domain/repositories/LevelsRepository'
import type { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import { GenerateColorsRequest } from './dto/GenerateColorsRequest'
import { LevelsCollectionId } from '@gameContext/level/domain/LevelsCollectionId'
import { LevelId } from '@gameContext/level/domain/models/level/LevelId'
import { toGenerateColorsResponse } from './mapper/GenerateColorsMapper'
import { GenerateColorsResponse } from './dto/GenerateColorsResponse'
import { ColorGenerator } from '../domain/services/ColorGenerator'
import { GetNumberOfChipsOfLevelService } from '@gameContext/level/domain/services/GetNumberOfChipsOfLevelService'
import { ColorGroupCollection } from '../domain/ColorGroupCollection'

@injectable()
export class generateColors
  implements UseCase<GenerateColorsRequest, GenerateColorsResponse>
{
  constructor(
    @inject(Types.ColorMixerLogger) private logger: ColorMixerLogger,
    @inject(Types.LevelsRepository) private levelsRepository: LevelsRepository,
  ) {}

  async execute(
    generateColorsRequest: GenerateColorsRequest,
  ): Promise<GenerateColorsResponse> {
    const { levelsCollectionId } = generateColorsRequest
    const levelId = new LevelId(generateColorsRequest.levelId)
    const numberOfColorGroupsToGenerate =
      await new GetNumberOfChipsOfLevelService(this.levelsRepository).findLevel(
        new LevelsCollectionId(levelsCollectionId),
        levelId,
      )
    const colorGroups = new ColorGenerator(
      numberOfColorGroupsToGenerate,
    ).generate()
    const colorGroupCollection = new ColorGroupCollection(colorGroups, levelId)
    colorGroupCollection.each(this.logger.logGroup)
    return toGenerateColorsResponse(colorGroupCollection)
  }
}
