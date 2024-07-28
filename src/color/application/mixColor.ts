import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { MixColorResponse } from './dto/MixColorResponse'
import { MixColorRequest } from './dto/MixColorRequest'
import { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { ColorMixer } from '../domain/ColorMixer'
import { Color } from '../domain/Color'
import { toMixColorResponse } from './mapper/MixColorMapper'
import type { ColorMixerLogger } from '../domain/ColorMixerLogger'

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
