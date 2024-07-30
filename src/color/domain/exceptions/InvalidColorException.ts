import { Color } from '../models/Color'

class InvalidColorException extends Error {
  constructor(color: Color) {
    super(`Invalid color value: (${color.valueOf()})`)
    this.name = 'InvalidColorException'
  }
}

export { InvalidColorException }
