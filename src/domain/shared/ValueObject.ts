export abstract class ValueObject<T> {
	private readonly value: T;

	constructor(value: T) {
		this.value = value;
		this.ensureValueIsDefined(value);
	}

	private ensureValueIsDefined(value: T): void {
		if (value === undefined || value === null) {
			throw new Error('Value cannot be undefined or null');
		}
	}

	valueOf(): T {
		return this.value;
	}

	abstract toPrimitive(): T;
}
