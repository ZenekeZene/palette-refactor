import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { ColorGroup } from '@gameContext/color/domain/models/colorGroup/ColorGroup'
import { ColorGroupCollection } from '../ColorGroupCollection'
import { ColorChipId } from '../models/colorChip/ColorChipId'

export class ColorMixingFailedEvent extends DomainEvent<ColorGroupCollection> {
  static readonly EVENT_NAME = 'color.mixing.failed'

  readonly colorGroup: ColorGroup
  readonly swatchColorId: ColorChipId

  public static of(args: {
    aggregate: ColorGroupCollection
    colorGroup: ColorGroup
    swatchColorId: ColorChipId
  }): DomainEvent<ColorGroupCollection> {
    return new ColorMixingFailedEvent({
      aggregate: args.aggregate,
      colorGroup: args.colorGroup,
      swatchColorId: args.swatchColorId,
    })
  }

  private constructor({
    aggregate,
    colorGroup,
    swatchColorId,
  }: {
    aggregate: ColorGroupCollection
    colorGroup: ColorGroup
    swatchColorId: ColorChipId
  }) {
    super({
      eventName: ColorMixingFailedEvent.EVENT_NAME,
      aggregate,
    })
    this.colorGroup = colorGroup
    this.swatchColorId = swatchColorId
  }
}
