import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { Player } from '../Player'
import { PlayerBonus } from '../models/PlayerBonus'

export class BonusUsedEvent extends DomainEvent<Player> {
  static readonly EVENT_NAME = 'bonus.used'

  readonly bonusUsed: PlayerBonus = new PlayerBonus(1)

  public static of(args: { aggregate: Player }): DomainEvent<Player> {
    return new BonusUsedEvent({
      aggregate: args.aggregate,
    })
  }

  private constructor({ aggregate }: { aggregate: Player }) {
    super({
      eventName: BonusUsedEvent.EVENT_NAME,
      aggregate,
    })
  }
}
