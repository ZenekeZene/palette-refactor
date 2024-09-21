import { PlayerId } from '@gameContext/shared/domain/PlayerId'

export class PlayerWithoutBonus extends Error {
  constructor(playerId: PlayerId) {
    super(`Player ${playerId.valueOf()} without bonus`)
    this.name = 'PlayerWithoutBonus'
  }
}
