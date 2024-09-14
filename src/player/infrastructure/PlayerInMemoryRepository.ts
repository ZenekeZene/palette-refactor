import { injectable } from 'tsyringe'
import type { Player } from '@gameContext/player/domain/Player'
import type { PlayerId } from '@gameContext/shared/domain/PlayerId'
import type { PlayerRepository } from '@gameContext/player/domain/repositories/PlayerRepository'

@injectable()
class PlayerInMemoryRepository implements PlayerRepository {
  private players: Map<string, Player> = new Map()

  save(player: Player): void {
    this.players.set(player.id.valueOf(), player)
  }

  findById(id: PlayerId): Player | undefined {
    return this.players.get(id.valueOf())
  }
}

export { PlayerInMemoryRepository }
