export class GameSessionScore {
	private _score: number;

	constructor(score: number) {
		this._score = score;
		this.validate(score);
	}

	validate(value: number) {
		if (value < 0) {
			throw new Error('Score cannot be negative');
		}
	}

	get score() {
		return this._score;
	}
}
