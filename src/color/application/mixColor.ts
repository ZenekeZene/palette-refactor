import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { EventBus } from '@gameContext/shared/domain/utils/EventBus'
import type { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import type { MixColorRequest } from './dto/MixColorRequest'
import type { ColorRepository } from '../domain/repositories/ColorRepository'
import { ColorGroupId } from '../domain/models/colorGroup/ColorGroupId'
import { ColorChipId } from '../domain/models/colorChip/ColorChipId'
import { ColorGroupNotFoundInCollection } from '../domain/exceptions/ColorGroupNotFoundInCollection'
import type { ColorGroupCollection } from '../domain/ColorGroupCollection'

@injectable()
export class MixColor implements UseCase<MixColorRequest, boolean> {
  constructor(
    @inject(Types.ColorMixerLogger) private logger: ColorMixerLogger,
    @inject(Types.ColorRepository) private repository: ColorRepository,
    @inject(Types.EventBus) private eventBus: EventBus,
  ) {}

  private getColorGroupCollection(
    colorGroupId: ColorGroupId,
  ): ColorGroupCollection {
    const colorGroupCollection =
      this.repository.findByColorGroupId(colorGroupId)
    if (!colorGroupCollection) {
      throw new ColorGroupNotFoundInCollection(colorGroupId)
    }
    return colorGroupCollection
  }

  execute(mixColorRequest: MixColorRequest): boolean {
    const colorGroupId = new ColorGroupId(mixColorRequest.colorGroupId)
    const subtractedColorId = new ColorChipId(mixColorRequest.subtractedColorId)
    const swatchColorId = new ColorChipId(mixColorRequest.swatchColorId)

    const colorGroupCollection = this.getColorGroupCollection(colorGroupId)
    const colorGroup = colorGroupCollection.getColorGroupById(colorGroupId)
    const areTheSameColorGroup = colorGroupCollection.areTheSameColorGroup(
      colorGroup,
      subtractedColorId,
      swatchColorId,
    )
    // TODO: Model the response
    if (areTheSameColorGroup) {
      this.logger.success(colorGroup)
      colorGroupCollection.success(colorGroup)
    } else {
      this.logger.fail(colorGroup)
      colorGroupCollection.fail(colorGroup)
    }
    this.eventBus.publish(colorGroupCollection.pullDomainEvents())
    return areTheSameColorGroup
  }
}
// Note: not use here the ColorMixer service, its unnecessary
// because the colors are already mixed when the generateColors service is called.
