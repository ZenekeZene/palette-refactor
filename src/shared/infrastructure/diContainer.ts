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

container.registerSingleton(Types.IQuotesLoaderRepository, QuotesLoaderFromFileRepository)
container.registerSingleton(Types.IPlayerLoaderRepository, PlayerLoaderFromFileRepository)
container.registerSingleton(Types.ILevelsLoaderRepository, LevelsLoaderFromFileRepository)

container.registerSingleton(Types.LoadPlayerUseCase, LoadPlayerUseCase)
container.registerSingleton(Types.LoadQuotesUseCase, LoadQuotesUseCase)
container.registerSingleton(Types.LoadLevelsUseCase, LoadLevelsUseCase)

container.registerSingleton(Types.ILevelsRepository, LevelsInMemoryRepository)
container.registerSingleton(Types.IPlayerRepository, PlayerInMemoryRepository)
