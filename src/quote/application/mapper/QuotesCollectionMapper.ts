import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import { QuotesCollectionResponse } from '@gameContext/quote/application/dto/QuotesCollectionResponse'
import { QuoteDTO } from '@gameContext/quote/application/dto/QuoteDTO'

const toQuotesCollectionResponse = (quotesCollection: QuotesCollection): QuotesCollectionResponse => {
  const quotesDTO: QuoteDTO[] = quotesCollection.getQuotes().map(quote => ({
    id: quote.getId().valueOf(),
    text: quote.text,
    author: quote.author
  }))
  return {
    quotes: quotesDTO,
    id: quotesCollection.getId().valueOf()
  }
}

export { toQuotesCollectionResponse }
