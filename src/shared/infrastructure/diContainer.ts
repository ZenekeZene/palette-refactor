import { container } from "tsyringe"
import { Types } from "./identifiers"

import { LoadPlayerUseCase } from "@gameContext/player/application/loadPlayer.usecase"
import { LoadLevelsUseCase } from "@gameContext/level/application/loadLevels.usecase"
import { LoadQuotesUseCase } from "@gameContext/quote/application/loadQuotes.usecase"

import { PlayerLoaderFromFileRepository } from "@gameContext/player/infrastructure/PlayerLoaderFromFileRepository"
import { QuotesLoaderFromFileRepository } from "@gameContext/quote/infrastructure/QuotesLoaderFromFileRepository"
import { LevelsLoaderFromFileRepository } from "@gameContext/level/infrastructure/LevelsLoaderFromFileRepository"
import { LevelsInMemoryRepository } from "@gameContext/level/infrastructure/LevelsInMemoryRepository"
import { PlayerInMemoryRepository } from "@gameContext/player/infrastructure/PlayerInMemoryRepository"

container.registerSingleton(Types.QuotesLoaderRepository, QuotesLoaderFromFileRepository)
container.registerSingleton(Types.PlayerLoaderRepository, PlayerLoaderFromFileRepository)
container.registerSingleton(Types.LevelsLoaderRepository, LevelsLoaderFromFileRepository)

container.registerSingleton(Types.LevelsRepository, LevelsInMemoryRepository)
container.registerSingleton(Types.PlayerRepository, PlayerInMemoryRepository)

container.register(Types.LoadGame, LoadPlayerUseCase)
container.register(Types.LoadGame, LoadLevelsUseCase)
container.register(Types.LoadGame, LoadQuotesUseCase)

