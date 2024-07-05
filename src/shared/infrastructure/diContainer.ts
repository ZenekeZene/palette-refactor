import { container } from "tsyringe"
import { Types } from "./identifiers"

import { IPlayerLoaderRepository } from "@gameContext/player/domain/IPlayerLoaderRepository"
import { IQuotesLoaderRepository } from "@gameContext/quote/domain/IQuotesLoaderRepository"
import { ILevelsLoaderRepository } from "@gameContext/level/domain/ILevelsLoaderRepository"
import { ILevelsRepository } from "@gameContext/level/domain/ILevelsRepository"

import { PlayerLoaderRepository } from "@gameContext/player/infrastructure/PlayerLoaderRepository"
import { QuotesRepository } from "@gameContext/quote/infrastructure/QuotesRepository"
import { LevelsLoaderFromFileRepository } from "@gameContext/level/infrastructure/LevelsLoaderFromFileRepository"
import { LevelsInMemoryRepository } from "@gameContext/level/infrastructure/LevelsInMemoryRepository"

import { LoadPlayerUseCase, LoadPlayerUseCaseType } from "@gameContext/player/application/loadPlayer.usecase"
import { LoadLevelsUseCase, LoadLevelsUseCaseType } from "@gameContext/level/application/loadLevels.usecase"
import { LoadQuotesUseCase, LoadQuotesUseCaseType } from "@gameContext/quote/application/loadQuotes.usecase"

container.registerSingleton<IPlayerLoaderRepository>(Types.IPlayerRepository, PlayerLoaderRepository)
container.registerSingleton<IQuotesLoaderRepository>(Types.IQuotesLoaderRepository, QuotesRepository)

container.registerSingleton<LoadPlayerUseCaseType>(Types.LoadPlayerUseCase, LoadPlayerUseCase)
container.registerSingleton<LoadQuotesUseCaseType>(Types.LoadQuotesUseCase, LoadQuotesUseCase)
container.registerSingleton<LoadLevelsUseCaseType>(Types.LoadLevelsUseCase, LoadLevelsUseCase)

container.registerSingleton<ILevelsLoaderRepository>(Types.ILevelsLoaderRepository, LevelsLoaderFromFileRepository)
container.registerSingleton<ILevelsRepository>(Types.ILevelsRepository, LevelsInMemoryRepository)
