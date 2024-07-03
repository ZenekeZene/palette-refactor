import { PrizeRawModel } from './Prize'
import { PrizesCollection } from './PrizesCollection'

export interface IPrizesRepository {
  saveAllInMemory(levels: PrizesCollection): Promise<void>
  loadAllFromFile(): Promise<PrizeRawModel[]>
}
