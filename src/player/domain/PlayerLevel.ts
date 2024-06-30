import { NotNegative } from '@gameContext/shared/NotNegative'

export class PlayerLevel extends NotNegative {
  increment(): PlayerLevel {
    return new PlayerLevel(this.valueOf() + 1)
  }
}
