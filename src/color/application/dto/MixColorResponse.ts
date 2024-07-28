import type { Response } from '@gameContext/shared/domain/utils/Response'

export interface MixColorResponse extends Response {
  readonly mixedColor: string
}
