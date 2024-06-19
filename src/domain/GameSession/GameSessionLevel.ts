export class GameSessionLevel {
	private initialLevel: number

	constructor(private _level: number) {
		this.validate(_level)
		this.initialLevel = _level
	}

	validate(value: number) {
		if (value < 0) {
			throw new Error('Level cannot be negative')
		}
	}

	get level() {
		return this._level
	}

	increment(value: number) {
		this._level += value
		this.validate(this._level)
	}

	reset() {
		this._level = this.initialLevel
	}

	toPrimitive() {
		return this._level
	}
}
