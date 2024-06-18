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
}
