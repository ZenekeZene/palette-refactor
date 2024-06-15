import { Life } from '@/domain/Life/Life'
import { ILivesRepository } from '@/domain/Life/ILivesRepository'

interface UseCase<T> {
	execute: () => Promise<T>;
}

const GetLivesUseCase = (repository: ILivesRepository): UseCase<Life> => ({
	execute: async (): Promise<Life> => {
		const initialLives = await repository.getLives()
		return initialLives
	}
})

export { GetLivesUseCase }
