import { NotNegative } from '@/domain/shared/NotNegative'

export class GameSessionLevel extends NotNegative {
  increment(): GameSessionLevel {
    return new GameSessionLevel(this.valueOf() + 1)
  }
}
