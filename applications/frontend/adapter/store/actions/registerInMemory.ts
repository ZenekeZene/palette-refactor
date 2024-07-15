import { container } from "tsyringe"
import { RegisterPlayerRequest } from '@gameContext/player/application/dto/RegisterPlayerRequest'
import { RegisterLevelsRequest } from '@gameContext/level/application/dto/RegisterLevelsRequest'
import type { RegisterLevelsUseCase } from '@gameContext/level/application/registerLevels.usecase'
import type { RegisterPlayerUseCase } from "@gameContext/player/application/registerPlayer.usecase"
import type { RegisterQuotesUseCase } from "@gameContext/quote/application/registerQuotes.usecase"
import { RegisterQuotesRequest } from "@gameContext/quote/application/dto/RegisterQuotesRequest"
import { StoreState } from '../store.types'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'

const registerInMemory = (propsState: StoreState):void => {
  const { player, levels, quotes } = propsState
  const registerPlayerRequest = new RegisterPlayerRequest(player.id, player)
  const registerPlayer: RegisterPlayerUseCase = container.resolve(Types.RegisterPlayer)

  const registerLevelsRequest = new RegisterLevelsRequest(levels.levels)
  const registerLevels: RegisterLevelsUseCase = container.resolve(Types.RegisterLevels)

  const registerQuotesRequest = new RegisterQuotesRequest(quotes.id, quotes.quotes)
  const registerQuotes: RegisterQuotesUseCase = container.resolve(Types.RegisterQuotes)

  registerPlayer.execute(registerPlayerRequest)
  registerLevels.execute(registerLevelsRequest)
  registerQuotes.execute(registerQuotesRequest)
}

export { registerInMemory }
