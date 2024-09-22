import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { ColorChipId } from '@gameContext/shared/domain/ColorChipId'
import { Player } from '../Player'
import { PlayerBonus } from '../models/PlayerBonus'

export class BonusUsedEvent extends DomainEvent<Player> {
  static readonly EVENT_NAME = 'bonus.used'

  readonly bonusUsed: number = new PlayerBonus(1).valueOf()
  readonly currentSwatchColorId: ColorChipId

  public static of(args: {
    aggregate: Player
    currentSwatchColorId: ColorChipId
  }): DomainEvent<Player> {
    return new BonusUsedEvent({
      aggregate: args.aggregate,
      currentSwatchColorId: args.currentSwatchColorId,
    })
  }

  private constructor({
    aggregate,
    currentSwatchColorId,
  }: {
    aggregate: Player
    currentSwatchColorId: ColorChipId
  }) {
    super({
      eventName: BonusUsedEvent.EVENT_NAME,
      aggregate,
      data: {
        ...aggregate.toPrimitive(),
      },
    })
    this.currentSwatchColorId = currentSwatchColorId
  }
}
