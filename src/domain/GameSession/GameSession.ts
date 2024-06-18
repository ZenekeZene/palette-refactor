import { GameSessionScore } from '@/domain/GameSession/GameSessionScore'
import { GameSessionLives } from '@/domain/GameSession/GameSessionLives'
import { GameSessionBonus } from '@/domain/GameSession/GameSessionBonus'

export class GameSession {
  constructor(
    public lives: GameSessionLives,
    public score: GameSessionScore,
    public level: number,
    public bonus: GameSessionBonus
  ) {}

  nextLevel() {
    this.level++
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
    this.level = 0
    this.bonus.reset()
  }
}
