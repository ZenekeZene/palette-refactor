import type { Request } from '@gameContext/shared/domain/utils/Request'

export class UseBonusRequest implements Request {
  constructor(readonly playerId: string) {}
}
