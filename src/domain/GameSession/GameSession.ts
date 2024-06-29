import { GameSessionLives } from '@gameContext/domain/GameSession/GameSessionLives'
import { GameSessionScore } from '@gameContext/domain/GameSession/GameSessionScore'
import { GameSessionLevel } from '@gameContext/domain/GameSession/GameSessionLevel'
import { GameSessionBonus } from '@gameContext/domain/GameSession/GameSessionBonus'

export class GameSession {
  constructor(
    public lives: GameSessionLives,
    public score: GameSessionScore,
    public level: GameSessionLevel,
    public bonus: GameSessionBonus
  ) {}

  nextLevel() {
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

  toPrimitive(): GameSession.Primitive {
    return {
      lives: this.lives.toPrimitive(),
      score: this.score.toPrimitive(),
      level: this.level.toPrimitive(),
      bonus: this.bonus.toPrimitive(),
    }
  }

  static fromPrimitives(data: GameSession.Primitive): GameSession {
    return new GameSession(
      new GameSessionLives(data.lives),
      new GameSessionScore(data.score),
      new GameSessionLevel(data.level),
      new GameSessionBonus(data.bonus)
    )
  }
}

export namespace GameSession {
  export type Primitive = {
    lives: number
    score: number
    level: number
    bonus: number
  }
}
