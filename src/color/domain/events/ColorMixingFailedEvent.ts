import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { ColorChipId } from '@gameContext/shared/domain/ColorChipId'
import { ColorGroupCollection } from '../ColorGroupCollection'
import { ColorGroupId } from '../models/colorGroup/ColorGroupId'

export class ColorMixingFailedEvent extends DomainEvent<ColorGroupCollection> {
  static readonly EVENT_NAME = 'color.mixing.failed'

  readonly colorGroupIdFailed: string
  readonly correctColorGroupId: string

  public static of(args: {
    aggregate: ColorGroupCollection
    colorGroupIdFailed: ColorGroupId
    swatchColorId: ColorChipId
  }): DomainEvent<ColorGroupCollection> {
    return new ColorMixingFailedEvent({
      aggregate: args.aggregate,
      colorGroupIdFailed: args.colorGroupIdFailed.valueOf(),
      correctColorGroupId: args.aggregate
        .searchCorrectColorGroup(args.swatchColorId)
        .id.valueOf(),
    })
  }

  private constructor({
    aggregate,
    colorGroupIdFailed,
    correctColorGroupId,
  }: {
    aggregate: ColorGroupCollection
    colorGroupIdFailed: string
    correctColorGroupId: string
  }) {
    super({
      eventName: ColorMixingFailedEvent.EVENT_NAME,
      aggregate,
    })
    this.colorGroupIdFailed = colorGroupIdFailed
    this.correctColorGroupId = correctColorGroupId
  }
}
