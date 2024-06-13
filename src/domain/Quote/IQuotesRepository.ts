import { Quote } from '@/domain/Quote/Quote'

export interface IQuotesRepository {
	getQuotes(): Promise<Quote[]>
}
