import { NotNegative } from '@/domain/shared/NotNegative'

export class GameSessionLives extends NotNegative {
	increment(value: number) {
		return new GameSessionLives(this.valueOf() + value)
	}

	decrement() {
		return new GameSessionLives(this.valueOf() - 1)
	}
}
