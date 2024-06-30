import { UseCase } from '@gameContext/domain/shared/UseCase'
import { Player } from '@gameContext/domain/Player/Player'
import { IPlayerRepository } from '@gameContext/domain/Player/IPlayerRepository'

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
