const types = {
  RESULT: 'result',
  SUBTRACTED: 'subtracted',
  SWATCH: 'swatch',
} as const

export type ColorTypeOf = (typeof types)[keyof typeof types]

export class ColorType {
  static readonly types = types

  constructor(readonly type: ColorTypeOf) {}

  valueOf(): ColorTypeOf {
    return this.type
  }
}

export type ColorTypePrimitive = string
