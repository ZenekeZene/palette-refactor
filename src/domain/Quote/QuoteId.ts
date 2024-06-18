import { Id } from '@/domain/shared/Id'

class QuoteId extends Id {
	constructor(value: string) {
		super(value);
	}
}

export { QuoteId }
