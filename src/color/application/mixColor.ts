import { MixColorResponse } from './dto/MixColorResponse'
import { MixColorRequest } from './dto/MixColorRequest'
import { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { ColorMixer } from '../domain/ColorMixer'

export class MixColor implements UseCase<MixColorRequest, MixColorResponse> {
  constructor() {}

  async execute(mixColorRequest: MixColorRequest): Promise<MixColorResponse> {
    const color1 = mixColorRequest.color1
    const color2 = mixColorRequest.color2
    const colorMixer = new ColorMixer(color1, color2)
    const mixedColor = colorMixer.mix()
    const mixColorResponse = new MixColorResponse(mixedColor)
    return mixColorResponse
  }
}
