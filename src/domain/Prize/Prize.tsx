interface PrizeProps {
	readonly lives: number,
	readonly bonus: number,
}

export class Prize {
	lives: number
	bonus: number

	constructor({ lives, bonus }: PrizeProps) {
		this.lives = lives
		this.bonus = bonus
	}
}
