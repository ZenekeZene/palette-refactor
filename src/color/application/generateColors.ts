import { inject, injectable } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import { LevelId } from '@gameContext/shared/domain/LevelId'
import { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { PlayerId } from '@gameContext/shared/domain/PlayerId'
import { ColorGroupCollection } from '../domain/ColorGroupCollection'
import type { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import type { ColorRepository } from '../domain/repositories/ColorRepository'
import { GenerateColorsResponse } from './dto/GenerateColorsResponse'
import { toGenerateColorsResponse } from './mapper/GenerateColorsMapper'
import { GenerateColorsRequest } from './dto/GenerateColorsRequest'

@injectable()
export class GenerateColors
  implements UseCase<GenerateColorsRequest, GenerateColorsResponse>
{
  constructor(
    @inject(Types.ColorMixerLogger) private logger: ColorMixerLogger,
    @inject(Types.ColorRepository) private colorRepository: ColorRepository,
  ) {}

  execute(
    generateColorsRequest: GenerateColorsRequest,
  ): GenerateColorsResponse {
    const { numberOfColorsToGenerate } = generateColorsRequest
    const playerId = PlayerId.of(generateColorsRequest.playerId)
    const levelId = new LevelId(generateColorsRequest.levelId)
    const colorGroupCollection = ColorGroupCollection.of({
      numberOfColorsToGenerate,
      levelId,
      playerId,
    })
    this.colorRepository.save(colorGroupCollection)
    colorGroupCollection.each((colorGroup) => this.logger.logGroup(colorGroup))
    return toGenerateColorsResponse(colorGroupCollection)
  }
}
