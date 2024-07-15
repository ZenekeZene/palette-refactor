export interface LevelDTO {
  id: string,
  numberOfChips: number,
  prize: LevelPrizeDTO
}

interface LevelPrizeDTO {
  lives: number,
  bonus: number
}
