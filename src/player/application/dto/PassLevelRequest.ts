import type { Request } from '@gameContext/shared/domain/utils/Request'

export class PassLevelRequest implements Request {
  constructor(public readonly playerId: string) {}
}
