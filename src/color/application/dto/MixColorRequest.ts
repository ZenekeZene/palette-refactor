import type { Request } from '@gameContext/shared/domain/utils/Request'

export class MixColorRequest implements Request {
  constructor(
    public readonly color1: string,
    public readonly color2: string,
  ) {
    this.color1 = color1
    this.color2 = color2
  }
}
