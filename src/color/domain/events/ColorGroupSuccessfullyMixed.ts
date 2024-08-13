import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { ColorGroup } from '@gameContext/color/domain/models/colorGroup/ColorGroup'

type ColorGroupSuccessfullyMixedAttributes = {
  readonly mixed: ColorGroup
}

class ColorGroupSuccessfullyMixed extends DomainEvent {
  static readonly EVENT_NAME = 'color.group.successfully.mixed'

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
      eventName: ColorGroupSuccessfullyMixed.EVENT_NAME,
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
    attributes: ColorGroupSuccessfullyMixedAttributes
  }): DomainEvent {
    const { aggregateId, eventId, occurredOn, attributes } = params
    return new ColorGroupSuccessfullyMixed({
      aggregateId,
      mixed: attributes.mixed,
      eventId,
      occurredOn,
    })
  }
}

export { ColorGroupSuccessfullyMixed }
