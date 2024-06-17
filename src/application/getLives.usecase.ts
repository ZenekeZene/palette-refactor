import { UseCase } from '@/domain/shared/UseCase'
import { Life } from '@/domain/Life/Life'
import { ILivesRepository } from '@/domain/Life/ILivesRepository'

const GetLivesUseCase = (repository: ILivesRepository): UseCase<Life> => ({
	execute: async (): Promise<Life> => {
		const initialLives = await repository.getLives()
		return initialLives
	}
})

export { GetLivesUseCase }
