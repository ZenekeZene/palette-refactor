import { NotNegative } from '@gameContext/shared/NotNegative'

export class PlayerScore extends NotNegative {
  increment(value: number) {
    return new PlayerScore(this.valueOf() + value)
  }
}
