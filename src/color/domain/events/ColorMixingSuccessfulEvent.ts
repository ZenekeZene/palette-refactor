import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import {
  ColorGroup,
  ColorGroupPrimitive,
} from '@gameContext/color/domain/models/colorGroup/ColorGroup'
import { ColorGroupCollection } from '../ColorGroupCollection'

export class ColorMixingSuccessfulEvent extends DomainEvent<ColorGroupCollection> {
  static readonly EVENT_NAME = 'color.mixing.successful'

  readonly mixed: ColorGroupPrimitive

  public static of(args: {
    aggregate: ColorGroupCollection
    mixed: ColorGroup
  }): DomainEvent<ColorGroupCollection> {
    return new ColorMixingSuccessfulEvent({
      aggregate: args.aggregate,
      mixed: args.mixed.toPrimitive(),
    })
  }

  private constructor({
    aggregate,
    mixed,
  }: {
    aggregate: ColorGroupCollection
    mixed: ColorGroupPrimitive
  }) {
    super({
      eventName: ColorMixingSuccessfulEvent.EVENT_NAME,
      aggregate,
    })
    this.mixed = mixed
  }
}
