import { container } from 'tsyringe'

// Types:
import { Types } from './identifiers'

// Player use cases and repositories:
import { LoadPlayer } from '@gameContext/player/application/loadPlayer'
import { PassLevel } from '@gameContext/player/application/passLevel'
import { RegisterPlayer } from '@gameContext/player/application/registerPlayer'
import { PlayerLoaderFromFileRepository } from '@gameContext/player/infrastructure/PlayerLoaderFromFileRepository'
import { PlayerInMemoryRepository } from '@gameContext/player/infrastructure/PlayerInMemoryRepository'

// Level use cases and repositories:
import { LoadLevels } from '@gameContext/level/application/loadLevels'
import { RegisterLevels } from '@gameContext/level/application/registerLevels'
import { LevelsLoaderFromFileRepository } from '@gameContext/level/infrastructure/LevelsLoaderFromFileRepository'
import { LevelsInMemoryRepository } from '@gameContext/level/infrastructure/LevelsInMemoryRepository'

// Quote use cases and repositories:
import { LoadQuotes } from '@gameContext/quote/application/loadQuotes'
import { GetQuote } from '@gameContext/quote/application/getQuote'
import { RegisterQuotes } from '@gameContext/quote/application/registerQuotes'
import { QuotesLoaderFromFileRepository } from '@gameContext/quote/infrastructure/QuotesLoaderFromFileRepository'
import { QuotesInMemoryRepository } from '@gameContext/quote/infrastructure/QuotesInMemoryRepository'
import { OnLevelsCollectionCreated } from '@gameContext/player/application/OnLevelsCollectionCreated'

import { InMemoryAsyncEventBus } from '@gameContext/shared/infrastructure/eventBus/InMemoryAsyncEventBus'

// Player:
container.registerSingleton(
  Types.PlayerLoaderRepository,
  PlayerLoaderFromFileRepository
)
container.registerSingleton(Types.RegisterPlayer, RegisterPlayer)
container.registerSingleton(Types.PassLevel, PassLevel)
container.registerSingleton(Types.PlayerRepository, PlayerInMemoryRepository)

// Levels:
container.registerSingleton(
  Types.LevelsLoaderRepository,
  LevelsLoaderFromFileRepository
)
container.registerSingleton(Types.RegisterLevels, RegisterLevels)
container.registerSingleton(Types.LevelsRepository, LevelsInMemoryRepository)

// Quotes:
container.registerSingleton(
  Types.QuotesLoaderRepository,
  QuotesLoaderFromFileRepository
)
container.registerSingleton(Types.GetQuote, GetQuote)
container.registerSingleton(Types.RegisterQuotes, RegisterQuotes)
container.registerSingleton(Types.QuotesRepository, QuotesInMemoryRepository)

// Load game:
container.register(Types.LoadGame, LoadPlayer)
container.register(Types.LoadGame, LoadLevels)
container.register(Types.LoadGame, LoadQuotes)

// Event Bus:
container.registerSingleton(Types.EventBus, InMemoryAsyncEventBus)

// Subscribers:
container.register(Types.DomainEventSubscribers, OnLevelsCollectionCreated)
