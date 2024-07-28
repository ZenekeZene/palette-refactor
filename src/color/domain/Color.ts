import { ValueObject } from '@gameContext/shared/domain/utils/ValueObject'

const colorRegex = /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/

export class Color extends ValueObject<string> {
  constructor(value: string) {
    super(value)
    this.validate(value)
  }

  private validate(value: string) {
    if (!colorRegex.test(value)) {
      throw new Error('Invalid color')
    }
  }

  toPrimitive(): string {
    return this.valueOf()
  }

  static fromString(value: string): Color {
    return new Color(value)
  }

  static fromHSL(h: number, s: number, l: number): Color {
    return new Color(`hsl(${h}, ${s}%, ${l}%)`)
  }

  static random(): Color {
    const h = Math.floor(Math.random() * 360)
    const s = Math.floor(Math.random() * 100)
    const l = Math.floor(Math.random() * 100)

    return new Color(`hsl(${h}, ${s}%, ${l}%)`)
  }

  toArray(): [number, number, number] {
    const result = colorRegex.exec(this.valueOf())
    if (!result) {
      throw new Error('Invalid HSL string')
    }
    return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])]
  }
}
