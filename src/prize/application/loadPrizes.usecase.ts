import { UseCase } from "@gameContext/shared/utils/UseCase"
import { Prize } from "../domain/Prize"
import { IPrizeLoaderRepository } from "../domain/IPrizeLoaderRepository"

const LoadPrizes = (
  prizeRepository: IPrizeLoaderRepository
): UseCase<Prize[]> => ({
  execute: async (): Promise<Prize[]> => {
    const prizes = await prizeRepository.loadAll()
    return prizes
  },
})

export { LoadPrizes }
