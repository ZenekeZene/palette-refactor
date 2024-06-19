import { NotNegative } from '@/domain/shared/NotNegative'

export class GameSessionScore extends NotNegative {
	private initialScore: number

	constructor(private _score: number) {
		super(_score)
		this.initialScore = _score
	}

	increment(value: number) {
		this._score += value
		this.validate(this._score)
	}

	reset() {
		this._score = this.initialScore
	}
}
