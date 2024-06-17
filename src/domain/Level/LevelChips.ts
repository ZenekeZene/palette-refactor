class LevelChips {
	numberOfChips: number

	constructor(numberOfChips: number) {
		this.numberOfChips = numberOfChips
		this.validate(numberOfChips)
	}

	private validate(numberOfChips: number) {
		if (numberOfChips < 0) throw new Error('Invalid number of chips')
	}
}

export { LevelChips }
