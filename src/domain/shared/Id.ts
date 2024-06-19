import { v4 as uuidv4, validate as validateUuid } from 'uuid'
import { VO } from './VO'

class Id implements VO {
	private readonly _id:string

	constructor(value: string) {
		this._id = value
		this.validate(value)
	}

	get id () {
		return this._id
	}

	static random (): Id {
		return new Id(uuidv4())
	}

	validate (id: string): void {
		if (!validateUuid(id)) throw new Error('Invalid id')
	}

	toPrimitive() {
		return this._id.toString()
	}
}

export { Id }
