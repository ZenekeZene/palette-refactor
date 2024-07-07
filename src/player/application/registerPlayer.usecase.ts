import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { IPlayerRepository } from '@gameContext/player/domain/IPlayerRepository'
import { PlayerAlreadyExists } from '@gameContext/player//domain/PlayerAlreadyExists'
import { Player } from '@gameContext/player/domain/Player'
import type { PlayerId } from '@gameContext/player/domain/PlayerId'
import type { PlayerResponse } from './dto/player.dto'
import { toPlayerResponseDTO } from './mapper/PlayerMapper'

export interface RegisterPlayerUseCaseType extends UseCase<PlayerResponse> {}

@injectable()
class RegisterPlayerUseCase implements RegisterPlayerUseCaseType {
  constructor(
    @inject(Types.IPlayerRepository) private repository: IPlayerRepository,
    private playerId: PlayerId,
    private playerData: Player.Primitive,
  ) {}

  async execute(): Promise<PlayerResponse> {
    const existingPlayer = this.repository.findByPlayerId(this.playerId);
    if (existingPlayer) {
      throw new PlayerAlreadyExists(this.playerId);
    }
    const player = Player.fromPrimitives(this.playerData, this.playerId)
    this.repository.create(player)
    return Promise.resolve(toPlayerResponseDTO(player))
  }
}

export { RegisterPlayerUseCase }
