export class GameSessionScore {
	private initialScore: number

	constructor(private _score: number) {
		this.validate(_score)
		this.initialScore = _score
	}

	validate(value: number) {
		if (value < 0) {
			throw new Error('Score cannot be negative')
		}
	}

	get score() {
		return this._score
	}

	increment(value: number) {
		this._score += value
		this.validate(this._score)
	}

	reset() {
		this._score = this.initialScore
	}

	toPrimitive() {
		return this._score
	}
}
