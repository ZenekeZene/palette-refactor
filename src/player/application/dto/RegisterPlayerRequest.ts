import type { Request } from '@gameContext/shared/domain/utils/Request'
import { PlayerPrimitive } from '@gameContext/player/domain/Player'

export class RegisterPlayerRequest implements Request {
  constructor(
    readonly playerId: string,
    readonly playerData: PlayerPrimitive,
  ) {}
}
