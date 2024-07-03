import { Prize, PrizeRawModel } from './Prize'

export class PrizesCollection {
  private prizes: Prize[] = []

  constructor(_prizes: PrizeRawModel[] = []) {
    _prizes.forEach((_prize) => {
      const prize = Prize.fromPrimitive(_prize)
      this.prizes.push(prize)
    })
  }

  getPrizes(): Prize[] {
    return this.prizes
  }

  forEach(callback: (level: Prize) => void): void {
    return this.prizes.forEach(callback)
  }
}
