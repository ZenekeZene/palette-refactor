import { Prize } from '@/domain/Prize/Prize'
import { LevelChips } from './LevelChips'
import { LevelId } from './LevelId'

interface LevelProps {
	numberOfChips: LevelChips,
	prize: Prize,
}

class Level {
	private readonly _id:LevelId
	readonly numberOfChips:LevelChips
	readonly prize:Prize

	constructor({ numberOfChips, prize }: LevelProps) {
		this._id = LevelId.random()
		this.numberOfChips = numberOfChips
		this.prize = prize
	}

	get id() {
		return this._id
	}

	getPrize() {
		return this.prize
	}

	getNumberOfChips() {
		return this.numberOfChips
	}
}

export { Level }
