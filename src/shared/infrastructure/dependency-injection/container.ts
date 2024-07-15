import { container } from "tsyringe"
import { Types } from "./identifiers"

import { LoadPlayerUseCase } from "@gameContext/player/application/loadPlayer.usecase"
import { LoadLevelsUseCase } from "@gameContext/level/application/loadLevels.usecase"
import { LoadQuotesUseCase } from "@gameContext/quote/application/loadQuotes.usecase"
import { PassLevelUseCase } from "@gameContext/player/application/passLevel.usecase"
import { GetQuoteUseCase } from '@gameContext/quote/application/getQuote.usecase'

import { PlayerLoaderFromFileRepository } from "@gameContext/player/infrastructure/PlayerLoaderFromFileRepository"
import { QuotesLoaderFromFileRepository } from "@gameContext/quote/infrastructure/QuotesLoaderFromFileRepository"
import { LevelsLoaderFromFileRepository } from "@gameContext/level/infrastructure/LevelsLoaderFromFileRepository"
import { LevelsInMemoryRepository } from "@gameContext/level/infrastructure/LevelsInMemoryRepository"
import { PlayerInMemoryRepository } from "@gameContext/player/infrastructure/PlayerInMemoryRepository"
import { QuotesInMemoryRepository } from "@gameContext/quote/infrastructure/QuotesInMemoryRepository"
import { RegisterLevelsUseCase } from "@gameContext/level/application/registerLevels.usecase"
import { RegisterPlayerUseCase } from "@gameContext/player/application/registerPlayer.usecase"
import { RegisterQuotesUseCase } from "@gameContext/quote/application/registerQuotes.usecase"

container.registerSingleton(Types.QuotesLoaderRepository, QuotesLoaderFromFileRepository)
container.registerSingleton(Types.PlayerLoaderRepository, PlayerLoaderFromFileRepository)
container.registerSingleton(Types.LevelsLoaderRepository, LevelsLoaderFromFileRepository)
container.registerSingleton(Types.RegisterPlayer, RegisterPlayerUseCase)
container.registerSingleton(Types.RegisterLevels, RegisterLevelsUseCase)
container.registerSingleton(Types.RegisterQuotes, RegisterQuotesUseCase)
container.registerSingleton(Types.PassLevel, PassLevelUseCase)
container.registerSingleton(Types.GetQuoteUse, GetQuoteUseCase)

container.registerSingleton(Types.LevelsRepository, LevelsInMemoryRepository)
container.registerSingleton(Types.PlayerRepository, PlayerInMemoryRepository)
container.registerSingleton(Types.QuotesRepository, QuotesInMemoryRepository)

container.register(Types.LoadGame, LoadPlayerUseCase)
container.register(Types.LoadGame, LoadLevelsUseCase)
container.register(Types.LoadGame, LoadQuotesUseCase)

