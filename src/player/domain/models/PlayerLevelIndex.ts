import { NotNegative } from '@gameContext/shared/domain/utils/NotNegative'

export class PlayerLevelIndex extends NotNegative {
  increment(): PlayerLevelIndex {
    return new PlayerLevelIndex(this.valueOf() + 1)
  }
}
