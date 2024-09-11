import { container } from 'tsyringe'
import { MixColorRequest } from '@gameContext/color/application/dto/MixColorRequest'
import { MixColor } from '@gameContext/color/application/mixColor'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'

export const mixColor = (colorGroupId: string, swatchColorId: string) => {
  const mixColorRequest = new MixColorRequest(colorGroupId, swatchColorId)
  const mixColorUseCase = container.resolve<MixColor>(Types.MixColor)
  mixColorUseCase.execute(mixColorRequest)
}
