import { NotNegative } from '@/domain/shared/NotNegative'

export class GameSessionLevel extends NotNegative {
	private initialLevel: number

	constructor(private _level: number) {
		super(_level)
		this.initialLevel = _level
	}

	increment(value: number) {
		this._level += value
	}

	reset() {
		this._level = this.initialLevel
	}
}
