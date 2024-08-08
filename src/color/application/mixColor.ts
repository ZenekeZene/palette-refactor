import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { ColorMixer } from '../domain/services/ColorMixer'
import { toMixColorResponse } from './mapper/MixColorMapper'
import type { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import type { MixColorResponse } from './dto/MixColorResponse'
import type { MixColorRequest } from './dto/MixColorRequest'
import { ColorChip } from '../domain/models/colorChip/ColorChip'

@injectable()
export class MixColor implements UseCase<MixColorRequest, MixColorResponse> {
  constructor(
    @inject(Types.ColorMixerLogger) private logger: ColorMixerLogger,
  ) {}

  execute(mixColorRequest: MixColorRequest): MixColorResponse {
    const colorChip1 = ColorChip.fromPrimitive(mixColorRequest.color1)
    const colorChip2 = ColorChip.fromPrimitive(mixColorRequest.color2)
    const mixedColor = new ColorMixer(colorChip1, colorChip2).mix()
    const mixedColorChip = ColorChip.fromResultColor(mixedColor)
    this.logger.log(colorChip1, colorChip2, mixedColor)
    // TODO: check if the response is correct

    return toMixColorResponse(mixedColorChip)
  }
}
