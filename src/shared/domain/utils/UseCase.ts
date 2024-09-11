import type { Response } from './Response'
import type { Request } from './Request'

export interface UseCase<
  Req extends Request,
  Res extends Response | void = void,
> {
  execute: (request: Req) => Promise<Res> | Res
}
