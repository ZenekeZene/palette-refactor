import { NotNegative } from '@gameContext/shared/domain/utils/NotNegative'

export class PlayerLives extends NotNegative {
  increment(value: number) {
    return new PlayerLives(this.valueOf() + value)
  }

  decrement() {
    return new PlayerLives(this.valueOf() - 1)
  }
}
