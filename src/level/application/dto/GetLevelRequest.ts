import type { Request } from '@gameContext/shared/domain/utils/Request'

export class GetLevelRequest implements Request {
  constructor(
    readonly levelCollectionId: string,
    readonly levelIndex: number,
  ) {}
}
