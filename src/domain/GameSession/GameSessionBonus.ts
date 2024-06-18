export class GameSessionBonus {
	constructor(private _bonus: number) {
		this.validate(_bonus)
	}

	validate(value: number) {
		if (value < 0) {
			throw new Error('Bonus cannot be negative')
		}
	}

	get bonus() {
		return this._bonus
	}
}
