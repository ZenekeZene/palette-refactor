import { IPlayerRepository } from '@gameContext/player/domain/IPlayerRepository'
import { Player } from '@gameContext/player/domain/Player'

class PlayerRepository implements IPlayerRepository {
  async getPlayer(): Promise<Player> {
    try {
      const PlayerConfig = await import('@resources/Player.yaml')
      return Player.fromPrimitives(PlayerConfig.default.initial)
    } catch (error) {
      throw new Error('Error loading player session config')
    }
  }
}

export { PlayerRepository }
