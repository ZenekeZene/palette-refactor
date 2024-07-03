import { injectable } from "tsyringe"
import { IPrizesRepository } from '@gameContext/prize/domain/IPrizesRepository'
import type { Prize, PrizeRawModel } from '@gameContext/prize/domain/Prize'
import type { PrizesCollection } from '@gameContext/prize/domain/PrizesCollection'

@injectable()
class PrizesRepository implements IPrizesRepository {
  private _prizes: Map<string, Prize> = new Map()

  private add(prize: Prize) {
    this._prizes.set(prize.id.toPrimitive(), prize)
  }

  async saveAllInMemory(prizes: PrizesCollection): Promise<void> {
    prizes.forEach((prize) => this.add(prize))
  }

  async loadAllFromFile(): Promise<PrizeRawModel[]> {
    try {
      const PrizesConfig = await import('@resources/Prizes.yaml')
      const prizes = PrizesConfig.default.prizes as Array<PrizeRawModel>
      return prizes
    } catch (error) {
      console.error('Error loading prizes config', error)
      return new Array<PrizeRawModel>()
    }
  }
}

export { PrizesRepository }
