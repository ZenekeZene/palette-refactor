import { NotNegative } from '@/domain/shared/NotNegative'

export class GameSessionBonus extends NotNegative {
	private initialBonus: number

	constructor(private _bonus: number) {
		super(_bonus)
		this.initialBonus = _bonus
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
}
