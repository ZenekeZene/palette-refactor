import type { Request } from '@gameContext/shared/domain/utils/Request'
import { PlayerPrimitive } from '@gameContext/player/domain/Player'

export class RegisterPlayerRequest implements Request {
  constructor(
    public readonly playerId: string,
    public readonly playerData: PlayerPrimitive,
  ) {}
}
