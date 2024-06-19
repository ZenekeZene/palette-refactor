import { NotNegative } from '@/domain/shared/NotNegative'

export class GameSessionLives extends NotNegative {
	private _initialLives: number

	constructor(private _lives: number) {
		super(_lives)
		this._initialLives = _lives
	}

	decrement() {
		this._lives--
		this.validate(this._lives)
	}

	reset() {
		this._lives = this._initialLives
	}
}
