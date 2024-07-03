import { NotNegative } from '@gameContext/shared/domain/utils/NotNegative'

export class PlayerLevel extends NotNegative {
  increment(): PlayerLevel {
    return new PlayerLevel(this.valueOf() + 1)
  }
}
