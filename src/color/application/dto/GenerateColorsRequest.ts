import type { Request } from '@gameContext/shared/domain/utils/Request'

export class GenerateColorsRequest implements Request {
  constructor(
    public readonly levelsCollectionId: string,
    public readonly levelId: string,
  ) {}
}
