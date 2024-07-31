import type { Player } from '@gameContext/player/domain/Player'
import type { PlayerId } from '@gameContext/player/domain/models/PlayerId'

export interface PlayerRepository {
  save(player: Player): void
  findById(playerId: PlayerId): Player | undefined
}
