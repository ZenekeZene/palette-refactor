import { GameSessionLives } from '@/domain/GameSession/GameSessionLives'
import { GameSessionScore } from '@/domain/GameSession/GameSessionScore'
import { GameSessionLevel } from '@/domain/GameSession/GameSessionLevel'
import { GameSessionBonus } from '@/domain/GameSession/GameSessionBonus'

export class GameSession {
  constructor(
    public lives: GameSessionLives,
    public score: GameSessionScore,
    public level: GameSessionLevel,
    public bonus: GameSessionBonus
  ) {}

  nextLevel() {
    this.level.increment(1)
  }

  incrementScore(value: number) {
    this.score.increment(value)
  }

  incrementBonus(value: number) {
    this.bonus.increment(value)
  }

  decrementLives() {
    this.lives.decrement()
  }

  reset() {
    this.lives.reset()
    this.score.reset()
    this.level.reset()
    this.bonus.reset()
  }

  toPrimitive() {
    return {
      lives: this.lives.toPrimitive(),
      score: this.score.toPrimitive(),
      level: this.level.toPrimitive(),
      bonus: this.bonus.toPrimitive(),
    }
  }

  static fromPrimitives(data: any) {
    return new GameSession(
      new GameSessionLives(data.lives),
      new GameSessionScore(data.score),
      new GameSessionLevel(data.level),
      new GameSessionBonus(data.bonus)
    )
  }
}
