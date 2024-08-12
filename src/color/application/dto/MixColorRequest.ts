import type { Request } from '@gameContext/shared/domain/utils/Request'

export class MixColorRequest implements Request {
  constructor(
    readonly colorGroupId: string,
    readonly subtractedColorId: string,
    readonly swatchColorId: string,
  ) {}
}
