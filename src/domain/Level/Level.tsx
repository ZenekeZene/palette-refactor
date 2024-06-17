import { Prize } from '@/domain/Prize/Prize'
import { LevelChips } from './LevelChips'
import { LevelId } from './LevelId'

interface LevelProps {
	numberOfChips: LevelChips,
	prize: Prize,
}

class Level {
	private readonly id:LevelId
	readonly numberOfChips:LevelChips
	readonly prize:Prize

	constructor({ numberOfChips, prize }: LevelProps) {
		this.id = LevelId.random()
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
