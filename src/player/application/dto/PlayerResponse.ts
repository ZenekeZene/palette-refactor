import type { Response } from '@gameContext/shared/domain/utils/Response'

export interface PlayerResponse extends Response {
  id: string
  lives: number
  score: number
  levelIndex: number
  bonus: number
}

export type PlayerResponseProps = Omit<PlayerResponse, 'id'>
