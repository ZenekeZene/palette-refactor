import { v4 as uuidv4 } from 'uuid'
import validate from 'uuid-validate'

class Id {
	private readonly id:string

	constructor(value: string) {
		this.id = value
		this.validateId(value)
	}

	getId() {
		return this.id
	}

	static random (): Id {
		return new Id(uuidv4())
	}

	private validateId (id: string): void {
		if (!validate(id)) throw new Error('Invalid id')
	}
}

export { Id }
