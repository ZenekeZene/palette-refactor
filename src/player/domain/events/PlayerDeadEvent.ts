import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { Player } from '../Player'

export class PlayerDead extends DomainEvent<Player> {
  static readonly EVENT_NAME = 'player.dead'

  public static of(args: { aggregate: Player }): DomainEvent<Player> {
    return new PlayerDead({
      aggregate: args.aggregate,
    })
  }

  private constructor({ aggregate }: { aggregate: Player }) {
    super({
      eventName: PlayerDead.EVENT_NAME,
      aggregate,
    })
  }
}
