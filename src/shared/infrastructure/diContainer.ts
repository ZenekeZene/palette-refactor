import { container } from "tsyringe"
import { Types } from "./identifiers"
import { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { IPlayerRepository } from "@gameContext/player/domain/IPlayerRepository"
import { PlayerRepository } from "@gameContext/player/infrastructure/PlayerRepository"
import { IQuotesRepository } from "@gameContext/quote/domain/IQuotesRepository"
import { QuotesRepository } from "@gameContext/quote/infrastructure/QuotesRepository"
import { LoadLevelsUseCase } from "@gameContext/level/application/loadLevels.usecase"
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { ILevelsLoaderRepository } from "@gameContext/level/domain/ILevelsLoaderRepository"
import { LevelsLoaderFromFileRepository } from "@gameContext/level/infrastructure/LevelsLoaderFromFileRepository"
import { ILevelsRepository } from "@gameContext/level/domain/ILevelsRepository"
import { LevelsInMemoryRepository } from "@gameContext/level/infrastructure/LevelsInMemoryRepository"

container.registerSingleton<IPlayerRepository>(Types.IPlayerRepository, PlayerRepository)
container.registerSingleton<IQuotesRepository>(Types.IQuotesRepository, QuotesRepository)
container.registerSingleton<UseCase<LevelsCollection>>(Types.LoadLevelsUseCase, LoadLevelsUseCase)
container.registerSingleton<ILevelsLoaderRepository>(Types.ILevelsLoaderRepository, LevelsLoaderFromFileRepository)
container.registerSingleton<ILevelsRepository>(Types.ILevelsRepository, LevelsInMemoryRepository)
