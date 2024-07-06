import { inject, injectable } from 'tsyringe'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { IPlayerRepository } from '@gameContext/player/domain/IPlayerRepository'
import type { PlayerId } from '@gameContext/player/domain/PlayerId'
import { PlayerNotFoundException } from '@gameContext/player/domain/PlayerNotFoundException'

export interface PassLevelUseCaseType extends UseCase<void> {}

@injectable()
class PassLevelUseCase implements PassLevelUseCaseType {
  constructor(
    @inject('IPlayerRepository') private repository: IPlayerRepository,
    private playerId: PlayerId,
  ) {}

  async execute(): Promise<void> {
    const player = this.repository.findByPlayerId(this.playerId)
    if (!player) {
      throw PlayerNotFoundException
    }
    player.passLevel()
    this.repository.save(player)
  }
}

export { PassLevelUseCase }
