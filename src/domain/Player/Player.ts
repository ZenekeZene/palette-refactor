import { v4 as uuidv4 } from 'uuid'

interface PlayerProps {
	readonly id: string
}

class Player implements PlayerProps {
	id: string
	constructor() {
		this.id = uuidv4()
	}
}

export { Player }
