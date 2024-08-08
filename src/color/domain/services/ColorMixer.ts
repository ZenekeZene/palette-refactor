import { Color } from '../models/Color'
import { ColorsAreEqualsException } from '../exceptions/ColorsAreEqualsException'
import { InvalidColorException } from '../exceptions/InvalidColorException'
import { ColorChip } from '../models/colorChip/ColorChip'

export class ColorMixer {
  color1: ColorChip
  color2: ColorChip

  constructor(color1: ColorChip, color2: ColorChip) {
    this.color1 = color1
    this.color2 = color2
    this.validate()
  }

  private validate() {
    if (this.color1 === this.color2) {
      throw new ColorsAreEqualsException(this.color1.value, this.color2.value)
    }
  }

  private parseHSL(hsl: string): [number, number, number] {
    const regex = /hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/
    const result = regex.exec(hsl)
    if (!result) {
      throw new InvalidColorException(new Color(hsl))
    }
    return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])]
  }

  mix(): Color {
    const [h1, s1, l1] = this.parseHSL(this.color1.value.valueOf())
    const [h2, s2, l2] = this.parseHSL(this.color2.value.valueOf())

    const h = Math.floor((h1 + h2) / 2)
    const s = Math.floor((s1 + s2) / 2)
    let l = Math.floor((l1 + l2) / 2)

    // Ensure luminosity is not zero unless both are zero
    if (l1 !== 0 || l2 !== 0) {
      l = Math.max(l, 1)
    }

    return Color.fromHSL(h, s, l)
  }
}
