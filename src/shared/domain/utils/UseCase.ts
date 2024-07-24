import type { Request } from '@gameContext/shared/domain/utils/Request'
import type { Response } from '@gameContext/shared/domain/utils/Response'

export interface UseCase<Req extends Request, Res extends Response> {
  execute: (request: Req) => Promise<Res>
}
