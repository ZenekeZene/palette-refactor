import { Color } from '../models/Color'

class InvalidColor extends Error {
  constructor(color: Color) {
    super(`Invalid color value: (${color.valueOf()})`)
    this.name = 'InvalidColor'
  }
}

export { InvalidColor }
