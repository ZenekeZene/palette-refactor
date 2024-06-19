import { VO } from './VO'

class NotNegative implements VO {
	constructor(private _value: number) {
		this.validate(_value)
	}

	validate(value: number) {
		if (value < 0) {
			throw new Error('Value cannot be negative')
		}
	}

	get value() {
		return this._value
	}

	toPrimitive() {
		return this._value
	}
}

export { NotNegative }
