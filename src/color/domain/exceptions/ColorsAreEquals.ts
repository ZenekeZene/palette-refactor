import { Color } from '../models/Color'

class ColorsAreEquals extends Error {
  constructor(color1: Color, color2: Color) {
    super(`Colors (${color1.valueOf()})${color2.valueOf()} must be different`)
    this.name = 'ColorsAreEquals'
  }
}

export { ColorsAreEquals }
