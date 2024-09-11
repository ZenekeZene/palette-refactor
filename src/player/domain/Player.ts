import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { PlayerId } from '@gameContext/player/domain/models/PlayerId'
import { PlayerLives } from '@gameContext/player/domain/models/PlayerLives'
import { PlayerScore } from '@gameContext/player/domain/models/PlayerScore'
import { PlayerLevelIndex } from '@gameContext/player/domain/models/PlayerLevelIndex'
import { PlayerBonus } from '@gameContext/player/domain/models/PlayerBonus'
import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { DecrementedLivesEvent } from './events/DecrementedLivesEvent'
import { PlayerDead } from './events/PlayerDeadEvent'

export class Player extends AggregateRoot {
  constructor(
    readonly id: PlayerId,
    public lives: PlayerLives,
    public score: PlayerScore,
    public levelIndex: PlayerLevelIndex,
    public bonus: PlayerBonus,
  ) {
    super()
  }

  passLevel() {
    this.levelIndex = this.levelIndex.increment()
  }

  incrementScore(value: number) {
    this.score = this.score.increment(value)
  }

  incrementBonus(value: number) {
    this.bonus = this.bonus.increment(value)
  }

  decrementLives() {
    this.lives = this.lives.decrement()
    if (this.lives.isZero()) {
      console.log(this.lives)
      this.recordPlayerDead()
    } else {
      this.recordDecrementLivesEvent()
    }
  }

  private recordDecrementLivesEvent(): void {
    const decrementedLivesEvent = new DecrementedLivesEvent({
      aggregateId: this.id.valueOf(),
      decrementedLives: this.lives,
      eventId: Uuid.random().valueOf(),
      occurredOn: new Date(),
    })
    this.record(decrementedLivesEvent)
  }

  private recordPlayerDead(): void {
    const playerDeadEvent = new PlayerDead({
      aggregateId: this.id.valueOf(),
      eventId: Uuid.random().valueOf(),
      occurredOn: new Date(),
    })
    this.record(playerDeadEvent)
  }

  toPrimitive(): PlayerPrimitive {
    return {
      lives: this.lives.valueOf(),
      score: this.score.valueOf(),
      levelIndex: this.levelIndex.valueOf(),
      bonus: this.bonus.valueOf(),
    }
  }

  static fromPrimitives(data: PlayerPrimitive, playerId?: PlayerId): Player {
    return new Player(
      playerId || new PlayerId(),
      new PlayerLives(data.lives),
      new PlayerScore(data.score),
      new PlayerLevelIndex(data.levelIndex),
      new PlayerBonus(data.bonus),
    )
  }
}

export type PlayerPrimitive = {
  lives: number
  score: number
  levelIndex: number
  bonus: number
}
