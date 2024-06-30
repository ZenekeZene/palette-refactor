import { Player } from '@gameContext/domain/Player/Player'

export interface IPlayerRepository {
  getPlayer(): Promise<Player>
}
