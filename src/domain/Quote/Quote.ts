class Quote {
	readonly id: string
	readonly text: string
	readonly author: string

	constructor(id: string, quote: string, author: string) {
		this.id = id
		this.text = quote
		this.author = author
	}
}

export { Quote }
