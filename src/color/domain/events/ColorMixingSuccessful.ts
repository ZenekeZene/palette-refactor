import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { ColorGroup } from '@gameContext/color/domain/models/colorGroup/ColorGroup'

type ColorMixingSuccessfulAttributes = {
  readonly mixed: ColorGroup
}

export class ColorMixingSuccessful extends DomainEvent {
  static readonly EVENT_NAME = 'color.mixing.successful'

  readonly mixed: ColorGroup | undefined = undefined

  constructor({
    aggregateId,
    mixed,
    eventId,
    occurredOn,
  }: {
    aggregateId: string
    mixed: ColorGroup
    eventId?: string
    occurredOn?: Date
  }) {
    super({
      eventName: ColorMixingSuccessful.EVENT_NAME,
      aggregateId,
      eventId,
      occurredOn,
    })
    this.mixed = mixed
  }

  toPrimitives() {
    return {
      mixed: this.mixed?.toPrimitive(),
    }
  }

  static fromPrimitives(params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
    attributes: ColorMixingSuccessfulAttributes
  }): DomainEvent {
    const { aggregateId, eventId, occurredOn, attributes } = params
    return new ColorMixingSuccessful({
      aggregateId,
      mixed: attributes.mixed,
      eventId,
      occurredOn,
    })
  }
}
