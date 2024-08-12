import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import type { MixColorRequest } from './dto/MixColorRequest'
import type { ColorRepository } from '../domain/repositories/ColorRepository'
import { ColorGroupId } from '../domain/models/colorGroup/ColorGroupId'
import { ColorChipId } from '../domain/models/colorChip/ColorChipId'
import { ColorGroupNotFoundInCollection } from '../domain/exceptions/ColorGroupCollectionNotFound'

@injectable()
export class MixColor implements UseCase<MixColorRequest, boolean> {
  constructor(
    @inject(Types.ColorMixerLogger) private logger: ColorMixerLogger,
    @inject(Types.ColorRepository) private repository: ColorRepository,
  ) {}

  execute(mixColorRequest: MixColorRequest): boolean {
    const colorGroupId = new ColorGroupId(mixColorRequest.colorGroupId)
    const subtractedColorId = new ColorChipId(mixColorRequest.subtractedColorId)
    const swatchColorId = new ColorChipId(mixColorRequest.swatchColorId)

    const colorGroupCollection =
      this.repository.findByColorGroupId(colorGroupId)
    if (!colorGroupCollection) {
      throw new ColorGroupNotFoundInCollection(colorGroupId)
    }
    const colorGroup = colorGroupCollection.getColorGroupById(colorGroupId)
    const areTheSameColorGroup = colorGroupCollection.areTheSameColorGroup(
      colorGroup,
      subtractedColorId,
      swatchColorId,
    )
    // TODO: Model the response
    // TODO: Trigger a domain event
    if (areTheSameColorGroup) {
      this.logger.success(colorGroup)
      colorGroup.success()
      return true
    } else {
      this.logger.fail(colorGroup)
      colorGroup.fail()
      return false
    }
  }
}
// Note: not use here the ColorMixer service, its unnecessary
// because the colors are already mixed when the generateColors service is called.
