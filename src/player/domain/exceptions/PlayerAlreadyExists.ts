import { PlayerId } from "@gameContext/player/domain/models/PlayerId"

class PlayerAlreadyExists extends Error {
  constructor(playerId: PlayerId) {
    super(`Player with id ${playerId.valueOf()} already exists`)
    this.name = 'PlayerAlreadyExists'
  }
}

export { PlayerAlreadyExists }
