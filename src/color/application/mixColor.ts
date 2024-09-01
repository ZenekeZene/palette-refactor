import { injectable, inject } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { EventBus } from '@gameContext/shared/domain/utils/EventBus'
import type { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import type { MixColorRequest } from './dto/MixColorRequest'
import type { ColorRepository } from '../domain/repositories/ColorRepository'
import type { ColorGroupCollection } from '../domain/ColorGroupCollection'
import { ColorGroupId } from '../domain/models/colorGroup/ColorGroupId'
import { ColorChipId } from '../domain/models/colorChip/ColorChipId'
import { ColorGroupNotFoundInCollection } from '../domain/exceptions/ColorGroupNotFoundInCollection'
import { ColorGroup } from '../domain/models/colorGroup/ColorGroup'
import { MixColorResponse } from './dto/MixColorResponse'
import { toMixColorResponse } from './mapper/MixColorMapper'
import { ColorMixerFailed } from '../domain/exceptions/ColorMixerFailed'

@injectable()
export class MixColor implements UseCase<MixColorRequest, MixColorResponse> {
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

  private handleSuccess(
    colorGroup: ColorGroup,
    colorGroupCollection: ColorGroupCollection,
  ) {
    this.logger.success(colorGroup)
    colorGroupCollection.success(colorGroup)
    return toMixColorResponse(colorGroup, null)
  }

  private handleFailure(
    failedColorGroup: ColorGroup,
    colorGroupCollection: ColorGroupCollection,
    swatchColorId: ColorChipId,
  ) {
    colorGroupCollection.fail(failedColorGroup)
    const correctColorGroup =
      colorGroupCollection.searchCorrectColorGroup(swatchColorId)
    this.logger.fail(failedColorGroup, correctColorGroup)
    return toMixColorResponse(
      null,
      new ColorMixerFailed(colorGroupCollection, correctColorGroup),
    )
  }

  execute(mixColorRequest: MixColorRequest): MixColorResponse {
    const colorGroupId = new ColorGroupId(mixColorRequest.colorGroupId)
    const swatchColorId = new ColorChipId(mixColorRequest.swatchColorId)

    const colorGroupCollection = this.getColorGroupCollection(colorGroupId)
    const colorGroup = colorGroupCollection.getColorGroupById(colorGroupId)
    const areTheSameColorGroup = colorGroupCollection.areTheSameColorGroup(
      colorGroup,
      swatchColorId,
    )

    const response: MixColorResponse = areTheSameColorGroup
      ? this.handleSuccess(colorGroup, colorGroupCollection)
      : this.handleFailure(colorGroup, colorGroupCollection, swatchColorId)
    this.eventBus.publish(colorGroupCollection.pullDomainEvents())
    return response
  }
}
