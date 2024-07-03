import { container } from "tsyringe"
import { UseCase } from '@gameContext/shared/utils/UseCase'
import { IPlayerRepository } from "@gameContext/player/domain/IPlayerRepository"
import { PlayerRepository } from "@gameContext/player/infrastructure/PlayerRepository"
import { IQuotesRepository } from "@gameContext/quote/domain/IQuotesRepository"
import { QuotesRepository } from "@gameContext/quote/infrastructure/QuotesRepository"
import { LoadLevelsUseCase } from "@gameContext/level/application/loadLevels.usecase"
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { ILevelsLoaderRepository } from "@gameContext/level/domain/ILevelsLoaderRepository"
import { LevelsLoaderFromFileRepository } from "@gameContext/level/infrastructure/LevelsLoaderFromFileRepository"
import { IPrizesRepository } from "@gameContext/prize/domain/IPrizesRepository"
import { PrizesRepository } from "@gameContext/prize/infrastructure/PrizesRepository"
import { ILevelsRepository } from "@gameContext/level/domain/ILevelsRepository"
import { LevelsInMemoryRepository } from "@gameContext/level/infrastructure/LevelsInMemoryRepository"

container.registerSingleton<IPlayerRepository>('IPlayerRepository', PlayerRepository)
container.registerSingleton<IQuotesRepository>('IQuotesRepository', QuotesRepository)
container.registerSingleton<UseCase<LevelsCollection>>('LoadLevelsUseCase', LoadLevelsUseCase)
container.registerSingleton<ILevelsLoaderRepository>('ILevelsLoaderRepository', LevelsLoaderFromFileRepository)
container.registerSingleton<ILevelsRepository>('ILevelsRepository', LevelsInMemoryRepository)
container.registerSingleton<IPrizesRepository>('IPrizesRepository', PrizesRepository)
