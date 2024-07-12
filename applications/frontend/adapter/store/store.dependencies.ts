import { container } from "tsyringe"
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import { IPlayerRepository } from '@gameContext/player/domain/repositories/IPlayerRepository'
import { ILevelsRepository } from "@gameContext/level/domain/repositories/ILevelsRepository";

export interface StoreDependencies {
  playerRepository: IPlayerRepository;
  levelsRepository: ILevelsRepository
  // Add more dependencies here
}

// TODO: Can we avoid this? And just use the container directly?
export const storeDependencies: StoreDependencies = {
  playerRepository: container.resolve(Types.IPlayerRepository),
  levelsRepository: container.resolve(Types.ILevelsRepository)
}
