import { State } from '@/adapter/store/store.types'
import { LevelsCollection } from '@/domain/Level/LevelsCollection'
import { Level } from '@/domain/Level/Level'
import { Quote, QuoteProps } from '@/domain/Quote/Quote'
import { QuotesCollection } from '@/domain/Quote/QuotesCollection'
import { GameSession } from '@/domain/GameSession/GameSession'

class StoreBuilder {
  private state: State

  constructor() {
    this.state = this.createInitialState()
  }

  private createInitialState(): State {
    const levels = new LevelsCollection()
    levels.add(Level.fromPrimitive({ numberOfChips: 0 }))

    const quote = new Quote('author', 'quote')
    const quotes = new QuotesCollection()
    quotes.add(quote)

    const gameSession = GameSession.fromPrimitives({
      lives: 0,
      score: 0,
      level: 0,
      bonus: 0,
    })

    return {
      gameSession,
      levels,
      tutorialIsWatched: false,
      quotes,
      quote,
    }
  }

  withLevels(levels: LevelsCollection): StoreBuilder {
    this.state.levels = levels
    return this
  }

  withQuote(quote: QuoteProps): StoreBuilder {
    this.state.quote = new Quote(quote.text, quote.author)
    return this
  }

  withGameSession(gameSession: GameSession): StoreBuilder {
    this.state.gameSession = gameSession
    return this
  }

  get currentState(): State {
    return this.state
  }
}

export { StoreBuilder }
