import { injectable, injectAll } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import type { Loader } from '@gameContext/shared/domain/Loader'
import { Response } from '../domain/utils/Response'

@injectable()
export class LoadGame {
  constructor(@injectAll(Types.LoadGame) private loadGame: Loader[]) {}

  async launch(): Promise<Response[]> {
    const loadPromises = this.loadGame.map((loader) => loader.execute())
    return await Promise.all(loadPromises)
  }
}
