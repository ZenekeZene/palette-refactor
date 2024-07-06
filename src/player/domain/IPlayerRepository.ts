import type { Player } from './Player'
import type { PlayerId } from './PlayerId'

export interface IPlayerRepository {
  findByPlayerId(playerId: PlayerId): Player | undefined
  save(player: Player): void
}
