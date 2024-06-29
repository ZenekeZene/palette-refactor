import { UseCase } from '@gameContext/domain/shared/UseCase'
import { GameSession } from '@gameContext/domain/GameSession/GameSession'
import { IGameSessionRepository } from '@gameContext/domain/GameSession/IGameSessionRepository'

export type GetGameSessionExecution = Promise<GameSession>

const GetGameSessionUseCase = (
  repository: IGameSessionRepository
): UseCase<GameSession> => ({
  execute: async (): GetGameSessionExecution => {
    const gameSession = await repository.getGameSession()
    return gameSession
  },
})

export { GetGameSessionUseCase }
