import { NotNegative } from '@gameContext/domain/shared/NotNegative'

export class PlayerScore extends NotNegative {
  increment(value: number) {
    return new PlayerScore(this.valueOf() + value)
  }
}
