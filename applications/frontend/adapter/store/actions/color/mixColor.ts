import { container } from 'tsyringe'
import { MixColorRequest } from '@gameContext/color/application/dto/MixColorRequest'
import { MixColor } from '@gameContext/color/application/mixColor'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'

export const mixColor = (
  colorGroupId: string,
  subtractedColorId: string,
  swatchColorId: string,
): void => {
  try {
    const mixColorRequest = new MixColorRequest(
      colorGroupId,
      subtractedColorId,
      swatchColorId,
    )
    const mixColorUseCase = container.resolve<MixColor>(Types.MixColor)

    const response = mixColorUseCase.execute(mixColorRequest)
    // TODO: Implement response handling
  } catch (error) {
    console.error('Failed to mix color:', error)
  }
}
