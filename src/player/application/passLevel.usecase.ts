import { inject, injectable } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { IPlayerRepository } from '@gameContext/player/domain/IPlayerRepository'
import { PlayerId } from '@gameContext/player/domain/PlayerId'
import { PlayerNotFoundException } from '@gameContext/player/domain/PlayerNotFoundException'
import { PlayerResponse } from './dto/player.dto'
import { toPlayerResponseDTO } from './mapper/PlayerMapper'

export interface PassLevelUseCaseType extends UseCase<PlayerResponse> {}

@injectable()
class PassLevelUseCase implements PassLevelUseCaseType {
  constructor(
    @inject(Types.IPlayerRepository) private repository: IPlayerRepository,
    private playerId: PlayerId,
  ) {}

  async execute(): Promise<PlayerResponse> {
    const player = this.repository.findByPlayerId(this.playerId)
    if (!player) {
      throw new PlayerNotFoundException()
    }
    player.passLevel()
    this.repository.save(player)
    return Promise.resolve(toPlayerResponseDTO(player))
  }
}

export { PassLevelUseCase }
