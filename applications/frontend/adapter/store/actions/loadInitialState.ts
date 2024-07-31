import { container } from 'tsyringe'
import { LoadGame } from '@gameContext/shared/application/loadGame'
import { Store, Player, Levels, Quotes } from '../types/store'
import { actions } from './actions'

export const loadInitialState = async (): Promise<Store> => {
  const loadGame = container.resolve(LoadGame)
  const responses = await loadGame.launch()
  const [playerResponse, levelsResponse, quotesResponse] = responses
  const player = playerResponse as Player
  const levels = levelsResponse as Levels
  const quotes = quotesResponse as Quotes
  actions.registerInMemory(player, levels, quotes)
  const quote = actions.getNextQuote(quotes)

  return {
    player,
    levels,
    quotes,
    quote,
    tutorialIsWatched: false,
  }
}
