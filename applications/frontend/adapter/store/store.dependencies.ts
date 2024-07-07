import {container} from "tsyringe"
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import { IPlayerRepository } from '@gameContext/player/domain/IPlayerRepository'

export interface StoreDependencies {
  playerRepository: IPlayerRepository;
  // Add more dependencies here
}

export const storeDependencies: StoreDependencies = {
  playerRepository: container.resolve(Types.IPlayerRepository),
}
