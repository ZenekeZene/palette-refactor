import { NotNegative } from '@gameContext/shared/utils/NotNegative'

export class PlayerLevel extends NotNegative {
  increment(): PlayerLevel {
    return new PlayerLevel(this.valueOf() + 1)
  }
}
