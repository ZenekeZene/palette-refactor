import { v4 as uuidv4 } from 'uuid'
import { Prize } from '@/domain/Prize/Prize'

interface LevelProps {
	numberOfChips: number,
	prize: Prize,
}

class Level {
	private readonly id:string
	readonly numberOfChips:number
	readonly prize:Prize

	constructor({ numberOfChips, prize }: LevelProps) {
		this.id = uuidv4()
		this.numberOfChips = numberOfChips
		this.prize = prize
	}

	getId() {
		return this.id
	}

	getPrize() {
		return this.prize
	}

	getNumberOfChips() {
		return this.numberOfChips
	}
}

export { Level }
