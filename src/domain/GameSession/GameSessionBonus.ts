import { NotNegative } from '@gameContext/domain/shared/NotNegative'

export class GameSessionBonus extends NotNegative {
  increment(value: number) {
    return new GameSessionBonus(this.valueOf() + value)
  }

  decrement() {
    return new GameSessionBonus(this.valueOf() - 1)
  }
}
