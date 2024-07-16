import { Player } from '@gameContext/player/domain/Player'

export class RegisterPlayerRequest {
  constructor(
    public readonly playerId: string,
    public readonly playerData: Player.Primitive
  ) {}
}
