import { container } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import { UseBonusRequest } from '@gameContext/player/application/dto/UseBonusRequest'
import { UseBonus } from '@gameContext/player/application/useBonus'
import { Player, Color } from '../types/store'

export const launchBonus = (player: Player, currentSwatchColor: Color) => {
  const useBonusRequest = new UseBonusRequest(player.id, currentSwatchColor.id)
  const useBonusUseCase = container.resolve<UseBonus>(Types.UseBonus)
  useBonusUseCase.execute(useBonusRequest)
}
