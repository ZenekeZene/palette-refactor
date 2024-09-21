import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { PlayerLives } from '../models/PlayerLives'
import { Player } from '../Player'

export class LivesDecrementedEvent extends DomainEvent<Player> {
  static readonly EVENT_NAME = 'player.lives.decremented'

  readonly livesDecremented: PlayerLives = new PlayerLives(1)

  public static of(args: { aggregate: Player }): DomainEvent<Player> {
    return new LivesDecrementedEvent({
      aggregate: args.aggregate,
    })
  }

  private constructor({ aggregate }: { aggregate: Player }) {
    super({
      eventName: LivesDecrementedEvent.EVENT_NAME,
      aggregate,
    })
  }
}
