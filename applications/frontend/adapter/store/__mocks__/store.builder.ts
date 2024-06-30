import { State } from '@frontend/adapter/store/store.types'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { Level } from '@gameContext/level/domain/Level'
import { Quote, QuoteProps } from '@gameContext/domain/Quote/Quote'
import { QuotesCollection } from '@gameContext/domain/Quote/QuotesCollection'
import { Player } from '@gameContext/player/domain/Player'

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

    const player = Player.fromPrimitives({
      lives: 0,
      score: 0,
      level: 0,
      bonus: 0,
    })

    return {
      player,
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

  withPlayer(player: Player): StoreBuilder {
    this.state.player = player
    return this
  }

  get currentState(): State {
    return this.state
  }
}

export { StoreBuilder }
