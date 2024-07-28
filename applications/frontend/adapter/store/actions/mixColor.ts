import { container } from 'tsyringe'
import { MixColorRequest } from '@gameContext/color/application/dto/MixColorRequest'
import type { MixColor } from '@gameContext/color/application/mixColor'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { Color } from '../types/store'

export const mixColor = async (
  color1: Color,
  color2: Color,
): Promise<Color> => {
  const mixColorRequest = new MixColorRequest(color1, color2)
  const mixColorUseCase = container.resolve<MixColor>(Types.MixColor)
  try {
    return await mixColorUseCase.execute(mixColorRequest)
  } catch (error) {
    console.error('Failed to mix color:', error)
    return color1
  }
}