import { v4 as uuidv4 } from 'uuid'

class Level {
	readonly id:string
	readonly index:number;
	readonly numberOfChips:number;

	constructor({ index }: { index: number }) {
		this.id = uuidv4()
		this.index = index
		this.numberOfChips = index
	}

	getId() {
		return this.id
	}
}

export { Level }
