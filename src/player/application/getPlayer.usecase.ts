import { UseCase } from '@gameContext/shared/utils/UseCase'
import { Player } from '@gameContext/player/domain/Player'
import { IPlayerRepository } from '@gameContext/player/domain/IPlayerRepository'

const GetPlayer = (
  repository: IPlayerRepository
): UseCase<Player> => ({
  execute: async (): Promise<Player> => {
    const player = await repository.getPlayer()
    return player
  },
})

export { GetPlayer }
