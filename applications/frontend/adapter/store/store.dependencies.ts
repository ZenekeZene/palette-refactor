import { container } from "tsyringe"
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { PlayerRepository } from '@gameContext/player/domain/repositories/PlayerRepository'
import type { LevelsRepository } from "@gameContext/level/domain/repositories/LevelsRepository";

export interface StoreDependencies {
  playerRepository: PlayerRepository;
  levelsRepository: LevelsRepository
  // Add more dependencies here
}

// TODO: Can we avoid this? And just use the container directly?
export const storeDependencies: StoreDependencies = {
  playerRepository: container.resolve(Types.PlayerRepository),
  levelsRepository: container.resolve(Types.LevelsRepository)
}
