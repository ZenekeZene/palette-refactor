import { container } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { RegisterPlayerRequest } from '@gameContext/player/application/dto/RegisterPlayerRequest'
import { RegisterLevelsRequest } from '@gameContext/level/application/dto/RegisterLevelsRequest'
import { RegisterQuotesRequest } from '@gameContext/quote/application/dto/RegisterQuotesRequest'
import type { RegisterPlayer } from '@gameContext/player/application/registerPlayer'
import type { RegisterLevels } from '@gameContext/level/application/registerLevels'
import type { RegisterQuotes } from '@gameContext/quote/application/registerQuotes'
import { Player, Levels, Quotes } from '../store'

const registerInMemory = (
  player: Player,
  levels: Levels,
  quotes: Quotes,
): void => {
  const registerPlayerRequest = new RegisterPlayerRequest(player.id, player)
  const registerPlayer: RegisterPlayer = container.resolve(Types.RegisterPlayer)

  const registerLevelsRequest = new RegisterLevelsRequest(
    levels.id,
    levels.items,
  )
  const registerLevels: RegisterLevels = container.resolve(Types.RegisterLevels)

  const registerQuotesRequest = new RegisterQuotesRequest(
    quotes.id,
    quotes.items,
  )
  const registerQuotes: RegisterQuotes = container.resolve(Types.RegisterQuotes)

  registerPlayer.execute(registerPlayerRequest)
  registerLevels.execute(registerLevelsRequest)
  registerQuotes.execute(registerQuotesRequest)
}

export { registerInMemory }
