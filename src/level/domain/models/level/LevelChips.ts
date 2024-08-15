import { NotNegative } from '@gameContext/shared/domain/utils/NotNegative'

export class LevelChips extends NotNegative {
  constructor(value: number) {
    super(value)
    this.validate(value)
  }

  validate(value: number): void {
    if (value < 1) {
      throw new Error('Level chips must be greater than 1')
    }
  }
}
