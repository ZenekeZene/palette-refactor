import { LevelChips } from './LevelChips'
import { LevelId } from './LevelId'
import { PrizeId } from '@gameContext/prize/domain/PrizeId'

export interface LevelRawModel {
  id: string
  numberOfChips: number
  prizeId: string
}

class Level {
  private readonly _id: LevelId
  private readonly _numberOfChips: LevelChips
  readonly _prizeId: PrizeId

  constructor(id: LevelId, numberOfChips: LevelChips, prizeId: PrizeId) {
    this._id = id
    this._numberOfChips = numberOfChips
    this._prizeId = prizeId
  }

  get id() {
    return this._id
  }

  get numberOfChips() {
    return this._numberOfChips
  }

  get prizeId() {
    return this._prizeId
  }

  static fromPrimitive(idValue: string, numberOfChips: number, prizeIdValue: string): Level {
    const levelId = new LevelId(idValue)
    const levelChips = new LevelChips(numberOfChips)
    const prizeId = new PrizeId(prizeIdValue)
    const level = new Level(levelId, levelChips, prizeId)
    return level
  }

  static toRaw(level: Level): LevelRawModel {
    return {
      id: level.id.toPrimitive(),
      numberOfChips: level.numberOfChips.toPrimitive(),
      prizeId: level.prizeId.toPrimitive(),
    }
  }
}

export { Level }
