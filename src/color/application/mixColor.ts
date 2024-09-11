import { injectable, inject } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { EventBus } from '@gameContext/shared/domain/utils/EventBus'
import type { MixColorRequest } from './dto/MixColorRequest'
import type { ColorRepository } from '../domain/repositories/ColorRepository'
import type { ColorGroupCollection } from '../domain/ColorGroupCollection'
import { ColorGroupId } from '../domain/models/colorGroup/ColorGroupId'
import { ColorChipId } from '../domain/models/colorChip/ColorChipId'
import { ColorGroupNotFoundInCollection } from '../domain/exceptions/ColorGroupNotFoundInCollection'

@injectable()
export class MixColor implements UseCase<MixColorRequest> {
  constructor(
    // @inject(Types.ColorMixerLogger) private logger: ColorMixerLogger,
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

  execute(mixColorRequest: MixColorRequest): void {
    const colorGroupId = new ColorGroupId(mixColorRequest.colorGroupId)
    const swatchColorId = new ColorChipId(mixColorRequest.swatchColorId)

    const colorGroupCollection = this.getColorGroupCollection(colorGroupId)
    const colorGroup = colorGroupCollection.getColorGroupById(colorGroupId)
    colorGroupCollection.areTheSameColorGroup(colorGroup, swatchColorId)
    this.eventBus.publish(colorGroupCollection.pullDomainEvents())
  }
}
