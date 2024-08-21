import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { ColorGroup } from '@gameContext/color/domain/models/colorGroup/ColorGroup'

type ColorMixingFailedAttributes = {
  readonly failedMixed: ColorGroup
  readonly correctMixed: ColorGroup
  readonly playerId: string
}

export class ColorMixingFailed extends DomainEvent {
  static readonly EVENT_NAME = 'color.mixing.failed'

  readonly failedMixed: ColorGroup | undefined = undefined
  readonly correctMixed: ColorGroup | undefined = undefined
  readonly playerId: string

  constructor({
    aggregateId,
    failedMixed,
    correctMixed,
    eventId,
    playerId,
    occurredOn,
  }: {
    aggregateId: string
    failedMixed: ColorGroup
    correctMixed: ColorGroup
    eventId?: string
    playerId: string
    occurredOn?: Date
  }) {
    super({
      eventName: ColorMixingFailed.EVENT_NAME,
      aggregateId,
      eventId,
      occurredOn,
    })
    this.failedMixed = failedMixed
    this.correctMixed = correctMixed
    this.playerId = playerId
  }

  toPrimitives() {
    return {
      failedMixed: this.failedMixed?.toPrimitive(),
      correctMixed: this.correctMixed?.toPrimitive(),
      playerId: this.playerId.valueOf(),
    }
  }

  static fromPrimitives(params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
    attributes: ColorMixingFailedAttributes
  }): DomainEvent {
    const { aggregateId, eventId, occurredOn, attributes } = params
    return new ColorMixingFailed({
      aggregateId,
      failedMixed: attributes.failedMixed,
      correctMixed: attributes.correctMixed,
      playerId: attributes.playerId,
      eventId,
      occurredOn,
    })
  }
}
