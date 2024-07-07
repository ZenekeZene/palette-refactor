import type { Player } from '@gameContext/player/domain/Player'
import type { PlayerId } from '@gameContext/player/domain/models/PlayerId'

export interface IPlayerRepository {
  create(player: Player): void
  findByPlayerId(playerId: PlayerId): Player | undefined
  save(player: Player): void
}
