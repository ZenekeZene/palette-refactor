import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { PlayerId } from '@gameContext/player/domain/models/PlayerId'
import { PlayerLives } from '@gameContext/player/domain/models/PlayerLives'
import { PlayerScore } from '@gameContext/player/domain/models/PlayerScore'
import { PlayerLevelIndex } from '@gameContext/player/domain/models/PlayerLevelIndex'
import { PlayerBonus } from '@gameContext/player/domain/models/PlayerBonus'

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
