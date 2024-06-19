import { ValueObject } from './ValueObject'

class NotNegative extends ValueObject<number> {
	constructor(value: number) {
		super(value)
		this.validate(value)
	}

	validate(value: number) {
		if (value < 0) {
			throw new Error('Value cannot be negative')
		}
	}

	toPrimitive() {
		return this.valueOf().valueOf()
	}
}

export { NotNegative }
