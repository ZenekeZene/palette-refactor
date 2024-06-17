import { Prize } from '@/domain/Prize/Prize'
import { Id } from '@/domain/shared/Id'

interface LevelProps {
	numberOfChips: number,
	prize: Prize,
}

class Level {
	private readonly id:Id
	readonly numberOfChips:number
	readonly prize:Prize

	constructor({ numberOfChips, prize }: LevelProps) {
		this.id = Id.random()
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
