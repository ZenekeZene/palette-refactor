import type { Player } from "@gameContext/player/domain/Player"
import type { PlayerId } from "@gameContext/player/domain/PlayerId"
import { IPlayerRepository } from "@gameContext/player/domain/IPlayerRepository"

class PlayerInMemoryRepository implements IPlayerRepository {
  private players: Player[] = []

  save(player: Player): void {
    this.players.push(player)
  }

  findByPlayerId(id: PlayerId): Player | undefined {
    return this.players.find((player) => player.getId().equals(id))
  }
}

export { PlayerInMemoryRepository }
