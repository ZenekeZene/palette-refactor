import { DomainEvent } from '@gameContext/shared/domain/utils/DomainEvent'
import { PlayerLives } from '../models/PlayerLives'
import { Player } from '../Player'

export class DecrementedLivesEvent extends DomainEvent<Player> {
  static readonly EVENT_NAME = 'player.decremented.lives'

  readonly decrementedLives: PlayerLives = new PlayerLives(1)

  public static of(args: { aggregate: Player }): DomainEvent<Player> {
    return new DecrementedLivesEvent({
      aggregate: args.aggregate,
    })
  }

  private constructor({ aggregate }: { aggregate: Player }) {
    super({
      eventName: DecrementedLivesEvent.EVENT_NAME,
      aggregate,
    })
  }
}
