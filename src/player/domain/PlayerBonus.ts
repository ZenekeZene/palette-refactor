import { NotNegative } from '@gameContext/shared/NotNegative'

export class PlayerBonus extends NotNegative {
  increment(value: number) {
    return new PlayerBonus(this.valueOf() + value)
  }

  decrement() {
    return new PlayerBonus(this.valueOf() - 1)
  }
}
