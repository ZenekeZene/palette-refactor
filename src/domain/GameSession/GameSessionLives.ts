export class GameSessionLives {
	private _initialLives: number

	constructor(private _lives: number) {
		this.validate(_lives)
		this._initialLives = _lives
	}

	validate(value: number) {
		if (value < 0) {
			throw new Error('Lives cannot be negative')
		}
	}

	get lives() {
		return this._lives
	}

	decrement() {
		this._lives--
		this.validate(this._lives)
	}

	reset() {
		this._lives = this._initialLives
	}
}
