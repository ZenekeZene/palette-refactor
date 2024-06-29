import { NotNegative } from '@gameContext/domain/shared/NotNegative'

export class GameSessionScore extends NotNegative {
  increment(value: number) {
    return new GameSessionScore(this.valueOf() + value)
  }
}
