import { UseCase } from '@/domain/shared/UseCase'
import { GameSession } from '@/domain/GameSession/GameSession'
import { IGameSessionRepository } from '@/domain/GameSession/IGameSessionRepository'

const GetGameSessionUseCase = (repository: IGameSessionRepository): UseCase<GameSession> => ({
	execute: async (): Promise<GameSession> => {
		const gameSession = await repository.getGameSession()
		return gameSession
	}
})

export { GetGameSessionUseCase }
