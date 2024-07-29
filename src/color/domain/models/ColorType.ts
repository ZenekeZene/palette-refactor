const types = {
  RESULT: 'result',
  SUSTRACTED: 'sustracted',
  SWATCH: 'swatch',
} as const

export class ColorType {
  static readonly types = types

  constructor(readonly type: (typeof types)[keyof typeof types]) {}
}
