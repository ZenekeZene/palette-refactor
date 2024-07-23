import { State } from '@frontend/adapter/store/store.types'
import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { LevelsCollectionResponse } from '@gameContext/level/application/dto/LevelsCollectionResponse'
import { toLevelsCollectionResponse } from '@gameContext/level/application/mapper/LevelsCollectionMapper'
import { Quote, QuoteProps } from '@gameContext/quote/domain/Quote'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import { Player } from '@gameContext/player/domain/Player'
import { toPlayerResponse } from '@gameContext/player/application/mapper/PlayerMapper'
import { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'

class StoreBuilder {
  private state: State

  constructor() {
    this.state = this.createInitialState()
  }

  private createInitialState(): State {
    const levelsRaw = [
      { id: Uuid.random(), numberOfChips: 0, prize: { lives: 0, bonus: 0 } },
    ]
    const levels = toLevelsCollectionResponse(new LevelsCollection(levelsRaw))

    const quote = new Quote('author', 'quote')
    const quotes = new QuotesCollection()
    quotes.add(quote)

    const playerDomain = Player.fromPrimitives({
      lives: 0,
      score: 0,
      level: 0,
      bonus: 0,
    })

    const player = toPlayerResponse(playerDomain)

    return {
      player,
      levels,
      tutorialIsWatched: false,
      quotes,
      quote,
    }
  }

  withLevels(levels: LevelsCollectionResponse): StoreBuilder {
    this.state.levels = levels
    return this
  }

  withQuote(quote: QuoteProps): StoreBuilder {
    this.state.quote = new Quote(quote.text, quote.author)
    return this
  }

  withPlayer(player: PlayerResponse): StoreBuilder {
    this.state.player = player
    return this
  }

  get currentState(): State {
    return this.state
  }
}

export { StoreBuilder }
