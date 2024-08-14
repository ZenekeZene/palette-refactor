import { container } from 'tsyringe'
import { MixColorRequest } from '@gameContext/color/application/dto/MixColorRequest'
import { MixColor } from '@gameContext/color/application/mixColor'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { MixColorResponse } from '@gameContext/color/application/dto/MixColorResponse'

export const mixColor = (
  colorGroupId: string,
  swatchColorId: string,
): MixColorResponse | Error => {
  try {
    const mixColorRequest = new MixColorRequest(colorGroupId, swatchColorId)
    const mixColorUseCase = container.resolve<MixColor>(Types.MixColor)
    return mixColorUseCase.execute(mixColorRequest)
  } catch (error) {
    console.error('Failed to mix color:', error)
    throw error
  }
}
