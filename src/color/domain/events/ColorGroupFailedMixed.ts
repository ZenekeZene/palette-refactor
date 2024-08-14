import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { ColorGroup } from '@gameContext/color/domain/models/colorGroup/ColorGroup'

type ColorGroupFailedMixedAttributes = {
  readonly failedMixed: ColorGroup
  readonly correctMixed: ColorGroup
}

class ColorGroupFailedMixed extends DomainEvent {
  static readonly EVENT_NAME = 'color.group.successfully.mixed'

  readonly failedMixed: ColorGroup | undefined = undefined
  readonly correctMixed: ColorGroup | undefined = undefined

  constructor({
    aggregateId,
    failedMixed,
    correctMixed,
    eventId,
    occurredOn,
  }: {
    aggregateId: string
    failedMixed: ColorGroup
    correctMixed: ColorGroup
    eventId?: string
    occurredOn?: Date
  }) {
    super({
      eventName: ColorGroupFailedMixed.EVENT_NAME,
      aggregateId,
      eventId,
      occurredOn,
    })
    this.failedMixed = failedMixed
    this.correctMixed = correctMixed
  }

  toPrimitives() {
    return {
      failedMixed: this.failedMixed?.toPrimitive(),
      correctMixed: this.correctMixed?.toPrimitive(),
    }
  }

  static fromPrimitives(params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
    attributes: ColorGroupFailedMixedAttributes
  }): DomainEvent {
    const { aggregateId, eventId, occurredOn, attributes } = params
    return new ColorGroupFailedMixed({
      aggregateId,
      failedMixed: attributes.failedMixed,
      correctMixed: attributes.correctMixed,
      eventId,
      occurredOn,
    })
  }
}

export { ColorGroupFailedMixed }
