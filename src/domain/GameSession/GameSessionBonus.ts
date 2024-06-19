export class GameSessionBonus {
	private initialBonus: number

	constructor(private _bonus: number) {
		this.validate(_bonus)
		this.initialBonus = _bonus
	}

	validate(value: number) {
		if (value < 0) {
			throw new Error('Bonus cannot be negative')
		}
	}

	get bonus() {
		return this._bonus
	}

	increment(value: number) {
		this._bonus += value
		this.validate(this._bonus)
	}

	decrement() {
		this._bonus--
		this.validate(this._bonus)
	}

	reset() {
		this._bonus = this.initialBonus
	}

	toPrimitive() {
		return this._bonus
	}
}
