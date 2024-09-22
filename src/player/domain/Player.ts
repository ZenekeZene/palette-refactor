import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { PlayerId } from '@gameContext/shared/domain/PlayerId'
import { PlayerLives } from '@gameContext/player/domain/models/PlayerLives'
import { PlayerScore } from '@gameContext/player/domain/models/PlayerScore'
import { PlayerLevelIndex } from '@gameContext/player/domain/models/PlayerLevelIndex'
import { PlayerBonus } from '@gameContext/player/domain/models/PlayerBonus'
import { LivesDecrementedEvent } from './events/LivesDecrementedEvent'
import { PlayerDead } from './events/PlayerDeadEvent'
import { BonusUsedEvent } from './events/BonusUsedEvent'
import { PlayerWithoutBonus } from './exceptions/PlayerWithoutBonus'
import { LevelId } from '@gameContext/shared/domain/LevelId'
import { ColorChipId } from '@gameContext/shared/domain/ColorChipId'

export class Player extends AggregateRoot {
  constructor(
    readonly id: PlayerId,
    public lives: PlayerLives,
    public score: PlayerScore,
    public levelIndex: PlayerLevelIndex,
    public bonus: PlayerBonus,
    public levelId: LevelId | undefined = undefined,
  ) {
    super()
  }

  passLevel() {
    this.levelIndex = this.levelIndex.increment()
  }

  incrementScore(value: number) {
    this.score = this.score.increment(value)
  }

  incrementBonus(value: number) {
    this.bonus = this.bonus.increment(value)
  }

  useBonus(currentSwatchColorId: ColorChipId) {
    if (this.bonus.isMinorThanZero()) {
      throw new PlayerWithoutBonus(this.id)
    }
    this.bonus = this.bonus.decrement()
    this.recordBonusUsedEvent(currentSwatchColorId)
  }

  decrementLives() {
    this.lives = this.lives.decrement()
    if (this.lives.isZero()) {
      this.recordPlayerDeadEvent()
    } else {
      this.recordLivesDecrementedEvent()
    }
  }

  private recordBonusUsedEvent(currentSwatchColorId: ColorChipId): void {
    const bonusUsedEvent = BonusUsedEvent.of({
      aggregate: this,
      currentSwatchColorId,
    })
    this.record(bonusUsedEvent)
  }

  private recordLivesDecrementedEvent(): void {
    const decrementedLivesEvent = LivesDecrementedEvent.of({
      aggregate: this,
    })
    this.record(decrementedLivesEvent)
  }

  private recordPlayerDeadEvent(): void {
    const playerDeadEvent = PlayerDead.of({
      aggregate: this,
    })
    this.record(playerDeadEvent)
  }

  toPrimitive() {
    return {
      id: this.id.valueOf(),
      lives: this.lives.valueOf(),
      score: this.score.valueOf(),
      levelIndex: this.levelIndex.valueOf(),
      bonus: this.bonus.valueOf(),
      levelId: this.levelId?.valueOf(),
    }
  }

  static createWithRandomId(data: PlayerPrimitive): Player {
    return new Player(
      PlayerId.random(),
      new PlayerLives(data.lives),
      new PlayerScore(data.score),
      new PlayerLevelIndex(data.levelIndex),
      new PlayerBonus(data.bonus),
    )
  }

  static of(data: PlayerPrimitive): Player {
    return new Player(
      PlayerId.of(data.id),
      new PlayerLives(data.lives),
      new PlayerScore(data.score),
      new PlayerLevelIndex(data.levelIndex),
      new PlayerBonus(data.bonus),
      data.levelId ? new LevelId(data.levelId) : undefined,
    )
  }
}

export type PlayerPrimitive = ReturnType<Player['toPrimitive']>
