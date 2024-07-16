import { container } from 'tsyringe'
import { LoadGame } from '@gameContext/shared/application/loadGame'
import { StoreState, Player, Levels, Quotes } from './store.types'

export const createInitialState = async (): Promise<StoreState> => {
  const loadGame = container.resolve(LoadGame)
  const responses = await loadGame.launch()
  const [playerResponse, levelsResponse, quotesResponse] = responses
  const player = playerResponse as Player
  const levels = levelsResponse as Levels
  const quotes = quotesResponse as Quotes

  return {
    player,
    levels,
    quotes,
    quote: null,
    tutorialIsWatched: false,
  }
}
