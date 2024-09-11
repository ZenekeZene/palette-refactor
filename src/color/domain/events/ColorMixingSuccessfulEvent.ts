import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { ColorGroup } from '@gameContext/color/domain/models/colorGroup/ColorGroup'
import { ColorGroupCollection } from '../ColorGroupCollection'

export class ColorMixingSuccessfulEvent extends DomainEvent<ColorGroupCollection> {
  static readonly EVENT_NAME = 'color.mixing.successful'

  readonly mixed: ColorGroup | undefined = undefined

  public static of(args: {
    aggregate: ColorGroupCollection
    mixed: ColorGroup
  }): DomainEvent<ColorGroupCollection> {
    return new ColorMixingSuccessfulEvent({
      aggregate: args.aggregate,
      mixed: args.mixed,
    })
  }

  private constructor({
    aggregate,
    mixed,
  }: {
    aggregate: ColorGroupCollection
    mixed: ColorGroup
  }) {
    super({
      eventName: ColorMixingSuccessfulEvent.EVENT_NAME,
      aggregate,
    })
    this.mixed = mixed
  }
}
