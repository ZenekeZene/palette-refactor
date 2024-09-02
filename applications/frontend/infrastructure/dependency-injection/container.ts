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
import { GetLevel } from '@gameContext/level/application/getLevel'
import { OnLevelsCollectionCreated } from '@gameContext/player/application/OnLevelsCollectionCreated'

// Quote use cases and repositories:
import { LoadQuotes } from '@gameContext/quote/application/loadQuotes'
import { GetQuote } from '@gameContext/quote/application/getQuote'
import { RegisterQuotes } from '@gameContext/quote/application/registerQuotes'
import { QuotesLoaderFromFileRepository } from '@gameContext/quote/infrastructure/QuotesLoaderFromFileRepository'
import { QuotesInMemoryRepository } from '@gameContext/quote/infrastructure/QuotesInMemoryRepository'

// Color use cases and repositories:
import { MixColor } from '@gameContext/color/application/mixColor'
import { ColorMixerByConsoleLogger } from '@gameContext/color/infrastructure/ColorMixerByConsoleLogger'
import { GenerateColors } from '@gameContext/color/application/generateColors'
import { ColorInMemoryRepository } from '@gameContext/color/infrastructure/ColorInMemoryRepository'
import { OnColorMixingFailed } from '@gameContext/player/application/OnColorMixingFailed'
import { OnDecrementedLives } from '@frontend/adapter/subscribers/OnDecrementedLives'

// Event Bus:
import { InMemoryAsyncEventBus } from '@gameContext/shared/infrastructure/eventBus/InMemoryAsyncEventBus'

export function configureDependencies() {
  // Player:
  container.registerSingleton(
    Types.PlayerLoaderRepository,
    PlayerLoaderFromFileRepository,
  )
  container.registerSingleton(Types.RegisterPlayer, RegisterPlayer)
  container.registerSingleton(Types.PassLevel, PassLevel)
  container.registerSingleton(Types.PlayerRepository, PlayerInMemoryRepository)

  // Levels:
  container.registerSingleton(
    Types.LevelsLoaderRepository,
    LevelsLoaderFromFileRepository,
  )
  container.registerSingleton(Types.RegisterLevels, RegisterLevels)
  container.registerSingleton(Types.LevelsRepository, LevelsInMemoryRepository)
  container.registerSingleton(Types.GetLevel, GetLevel)

  // Quotes:
  container.registerSingleton(
    Types.QuotesLoaderRepository,
    QuotesLoaderFromFileRepository,
  )
  container.registerSingleton(Types.GetQuote, GetQuote)
  container.registerSingleton(Types.RegisterQuotes, RegisterQuotes)
  container.registerSingleton(Types.QuotesRepository, QuotesInMemoryRepository)

  // Color:
  container.registerSingleton(Types.MixColor, MixColor)
  container.registerSingleton(Types.ColorMixerLogger, ColorMixerByConsoleLogger)
  container.registerSingleton(Types.GenerateColors, GenerateColors)
  container.registerSingleton(Types.ColorRepository, ColorInMemoryRepository)

  // Load game:
  container.register(Types.LoadGame, LoadPlayer)
  container.register(Types.LoadGame, LoadLevels)
  container.register(Types.LoadGame, LoadQuotes)

  // Event Bus:
  container.registerSingleton(Types.EventBus, InMemoryAsyncEventBus)

  // Subscribers:
  container.register(Types.DomainEventSubscribers, OnLevelsCollectionCreated)
  container.register(Types.DomainEventSubscribers, OnColorMixingFailed)
  container.register(Types.DomainEventSubscribers, OnDecrementedLives)
}
