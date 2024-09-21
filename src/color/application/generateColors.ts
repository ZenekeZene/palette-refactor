import { inject, injectable } from 'tsyringe'
import { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import { PlayerId } from '@gameContext/shared/domain/PlayerId'
// TODO: Refactor this import from another module
import { ColorGroupCollection } from '../domain/ColorGroupCollection'
import type { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import type { ColorRepository } from '../domain/repositories/ColorRepository'
import { GenerateColorsResponse } from './dto/GenerateColorsResponse'
import { toGenerateColorsResponse } from './mapper/GenerateColorsMapper'
import { GenerateColorsRequest } from './dto/GenerateColorsRequest'
import { LevelId } from '@gameContext/shared/domain/LevelId'

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
    const playerId = new PlayerId(generateColorsRequest.playerId)
    const levelId = new LevelId(generateColorsRequest.levelId)
    const colorGroupCollection = ColorGroupCollection.of({
      numberOfColorsToGenerate,
      levelId,
      playerId,
    })
    this.colorRepository.save(colorGroupCollection)
    // TODO: set VITE env variables to enable/disable this logger
    // in development mode:
    // colorGroupCollection.each((colorGroup) => this.logger.logGroup(colorGroup))
    // TODO: change to domain event, not response
    return toGenerateColorsResponse(colorGroupCollection)
  }
}
