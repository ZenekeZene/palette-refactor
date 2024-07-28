export interface LevelDTO {
  readonly id: string
  readonly numberOfChips: number
  readonly prize: LevelPrizeDTO
}

interface LevelPrizeDTO {
  readonly lives: number
  readonly bonus: number
}
