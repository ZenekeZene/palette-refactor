import { StateCreator } from 'zustand'
import type { Store } from '../../types/store'
import { actions } from '../../actions/actions'
import type { QuoteStore } from './quoteStore.d'

export const createQuoteStore: StateCreator<Store, [], [], QuoteStore> = (
  set,
  get,
) => ({
  quotes: undefined,
  quote: undefined,
  nextQuote: () => {
    const quotes = get().quotes
    const quote = actions.getNextQuote(quotes)
    set((state: QuoteStore) => ({ ...state, quote }))
  },
})
