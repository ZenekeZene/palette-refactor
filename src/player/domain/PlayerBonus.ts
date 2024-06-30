import { NotNegative } from '@gameContext/shared/utils/NotNegative'

export class PlayerBonus extends NotNegative {
  increment(value: number) {
    return new PlayerBonus(this.valueOf() + value)
  }

  decrement() {
    return new PlayerBonus(this.valueOf() - 1)
  }
}
