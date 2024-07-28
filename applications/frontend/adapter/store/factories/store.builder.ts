import type { StoreProps } from '@frontend/adapter/store/types/store'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import type { LevelsCollectionResponse } from '@gameContext/level/application/dto/LevelsCollectionResponse'
import { toLevelsCollectionResponse } from '@gameContext/level/application/mapper/LevelsCollectionMapper'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import { Player } from '@gameContext/player/domain/Player'
import { toPlayerResponse } from '@gameContext/player/application/mapper/PlayerMapper'
import type { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import type { QuoteDTO } from '@gameContext/quote/application/dto/QuoteDTO'
import { toQuotesCollectionResponse } from '@gameContext/quote/application/mapper/QuotesCollectionMapper'

class StoreBuilder {
  private state: StoreProps

  constructor() {
    this.state = this.createInitialState()
  }

  private createInitialState(): StoreProps {
    const levelsRaw = [
      { id: 'level-1', numberOfChips: 0, prize: { lives: 0, bonus: 0 } },
    ]
    const levels = toLevelsCollectionResponse(new LevelsCollection(levelsRaw))

    const quote = { id: 'quote', text: 'Quote', author: 'Author' }
    const quotes = toQuotesCollectionResponse(new QuotesCollection([quote]))

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

  withQuote(quote: QuoteDTO): StoreBuilder {
    this.state.quote = { id: 'quote', text: quote.text, author: quote.author }
    return this
  }

  withPlayer(player: PlayerResponse): StoreBuilder {
    this.state.player = player
    return this
  }

  get currentState(): StoreProps {
    return this.state
  }
}

export { StoreBuilder }
