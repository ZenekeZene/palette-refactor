import type { Response } from '@gameContext/shared/domain/utils/Response'

export interface Loader {
  execute(): Promise<Response>
}
