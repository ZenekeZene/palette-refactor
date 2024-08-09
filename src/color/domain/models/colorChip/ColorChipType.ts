const types = {
  RESULT: 'result',
  SUBTRACTED: 'subtracted',
  SWATCH: 'swatch',
} as const

export type ColorChipTypeOf = (typeof types)[keyof typeof types]

export const ColorTypes = types

export class ColorChipType {
  static readonly types = types

  constructor(readonly type: string) {
    this.validate()
  }

  valueOf(): string {
    return this.type
  }

  private validate() {
    if (!Object.values(types).includes(this.type as ColorChipTypeOf)) {
      throw new Error(`Invalid ColorChipType: ${this.type}`)
    }
  }
}

export type ColorChipTypePrimitive = string
