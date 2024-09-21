import type { Request } from '@gameContext/shared/domain/utils/Request'

export class GenerateColorsRequest implements Request {
  constructor(
    readonly numberOfColorsToGenerate: number,
    readonly levelId: string,
    readonly playerId: string,
  ) {}
}
