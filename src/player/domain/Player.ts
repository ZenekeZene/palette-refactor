import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { PlayerId } from './PlayerId'
import { PlayerLives } from './PlayerLives'
import { PlayerScore } from './PlayerScore'
import { PlayerLevel } from './PlayerLevel'
import { PlayerBonus } from './PlayerBonus'

export class Player extends AggregateRoot {
  constructor(
    private id: PlayerId,
    public lives: PlayerLives,
    public score: PlayerScore,
    public level: PlayerLevel,
    public bonus: PlayerBonus
  ) {
    super()
  }

  passLevel() {
    this.level = this.level.increment()
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

  toPrimitive(): Player.Primitive {
    return {
      lives: this.lives.toPrimitive(),
      score: this.score.toPrimitive(),
      level: this.level.toPrimitive(),
      bonus: this.bonus.toPrimitive(),
    }
  }

  getId(): PlayerId {
    return this.id
  }

  static fromPrimitives(data: Player.Primitive): Player {
    return new Player(
      new PlayerId(),
      new PlayerLives(data.lives),
      new PlayerScore(data.score),
      new PlayerLevel(data.level),
      new PlayerBonus(data.bonus)
    )
  }
}

export namespace Player {
  export type Primitive = {
    lives: number
    score: number
    level: number
    bonus: number
  }
}
