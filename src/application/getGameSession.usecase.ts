import { UseCase } from '@/domain/shared/UseCase'
import { GameSession } from '@/domain/GameSession/GameSession'

import { IGameSessionRepository } from '@/domain/GameSession/IGameSessionRepository'

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
