import type { Player } from '@gameContext/player/domain/Player'
import type { PlayerId } from '@gameContext/player/domain/models/PlayerId'
import { PlayerRepository } from '@gameContext/player/domain/repositories/PlayerRepository'

class PlayerInMemoryRepository implements PlayerRepository {
  private players: Player[] = []

  create(player: Player): void {
    this.players.push(player)
  }

  save(player: Player): void {
    const index = this.players.findIndex((p) =>
      p.getId().equals(player.getId())
    )
    this.players[index] = player
  }

  findByPlayerId(id: PlayerId): Player | undefined {
    return this.players.find((player) => player.getId().equals(id))
  }
}

export { PlayerInMemoryRepository }
