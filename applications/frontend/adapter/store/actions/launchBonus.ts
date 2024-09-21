import { container } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import { UseBonusRequest } from '@gameContext/player/application/dto/UseBonusRequest'
import { UseBonus } from '@gameContext/player/application/useBonus'
import { Player } from '../types/store'

export const launchBonus = (player: Player) => {
  const useBonusRequest = new UseBonusRequest(player.id)
  const useBonusUseCase = container.resolve<UseBonus>(Types.UseBonus)
  useBonusUseCase.execute(useBonusRequest)
}
