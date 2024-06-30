import { Player } from '@gameContext/player/domain/Player'

export interface IPlayerRepository {
  getPlayer(): Promise<Player>
}
