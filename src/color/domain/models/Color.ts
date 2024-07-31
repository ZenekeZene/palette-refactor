import { ValueObject } from '@gameContext/shared/domain/utils/ValueObject'
import { InvalidColorException } from '../exceptions/InvalidColorException'

const colorRegex = /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/

export class Color extends ValueObject<string> {
  constructor(value: string) {
    super(value)
    this.validate(value)
  }

  private validate(value: string) {
    if (!colorRegex.test(value)) {
      throw new InvalidColorException(this)
    }
  }

  toPrimitive(): string {
    return this.valueOf()
  }

  static fromPrimitive(value: string): Color {
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

  lightness(): number {
    const [_, __, l] = this.toArray()
    return l
  }

  toArray(): [number, number, number] {
    const [_, h, s, l] = this.valueOf().match(
      /hsl\((\d{1,3}), (\d{1,3})%, (\d{1,3})%\)/,
    )!

    return [parseInt(h), parseInt(s), parseInt(l)]
  }

  isEqualTo(color: Color): boolean {
    return this.valueOf() === color.valueOf()
  }
}

export type ColorPrimitive = string
