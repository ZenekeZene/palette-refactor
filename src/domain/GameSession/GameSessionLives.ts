export class GameSessionLives {
	constructor(private _lives: number) {
		this.validate(_lives)
	}

	validate(value: number) {
		if (value < 0) {
			throw new Error('Lives cannot be negative')
		}
	}

	get lives() {
		return this._lives
	}
}
