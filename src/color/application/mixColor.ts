import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { ColorMixer } from '../domain/services/ColorMixer'
import { Color } from '../domain/models/Color'
import { toMixColorResponse } from './mapper/MixColorMapper'
import type { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import type { MixColorResponse } from './dto/MixColorResponse'
import type { MixColorRequest } from './dto/MixColorRequest'

@injectable()
export class MixColor implements UseCase<MixColorRequest, MixColorResponse> {
  constructor(
    @inject(Types.ColorMixerLogger) private logger: ColorMixerLogger,
  ) {}

  execute(mixColorRequest: MixColorRequest): MixColorResponse {
    const color1 = new Color(mixColorRequest.color1)
    const color2 = new Color(mixColorRequest.color2)
    const colorMixer = new ColorMixer(color1, color2)
    const mixedColor = colorMixer.mix()
    this.logger.log(color1, color2, mixedColor)
    return toMixColorResponse(mixedColor)
  }
}
