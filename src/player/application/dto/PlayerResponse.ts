import type { Response } from '@gameContext/shared/domain/utils/Response'

export interface PlayerResponse extends Response {
  id: string
  lives: number
  score: number
  level: number
  bonus: number
}
