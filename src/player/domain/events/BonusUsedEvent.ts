import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { Player } from '../Player'
import { PlayerBonus } from '../models/PlayerBonus'

export class BonusUsedEvent extends DomainEvent<Player> {
  static readonly EVENT_NAME = 'bonus.used'

  readonly bonusUsed: number = new PlayerBonus(1).valueOf()

  public static of(args: { aggregate: Player }): DomainEvent<Player> {
    return new BonusUsedEvent({
      aggregate: args.aggregate,
    })
  }

  private constructor({ aggregate }: { aggregate: Player }) {
    super({
      eventName: BonusUsedEvent.EVENT_NAME,
      aggregate,
      data: aggregate.toPrimitive(),
    })
  }
}
