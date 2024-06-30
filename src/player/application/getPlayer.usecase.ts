import { UseCase } from '@gameContext/shared/utils/UseCase'
import { Player } from '@gameContext/player/domain/Player'
import { IPlayerRepository } from '@gameContext/player/domain/IPlayerRepository'

export type GetPlayerExecution = Promise<Player>

const GetPlayer = (
  repository: IPlayerRepository
): UseCase<Player> => ({
  execute: async (): GetPlayerExecution => {
    const player = await repository.getPlayer()
    return player
  },
})

export { GetPlayer }
