import { injectable, injectAll } from "tsyringe"
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { PlayerResponse } from "@gameContext/player/application/dto/PlayerResponse"
import type { LevelsCollectionResponse } from "@gameContext/level/application/dto/LevelsCollectionResponse"
import type { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import type { Loader } from '@gameContext/shared/domain/Loader'

type LoaderResponse = PlayerResponse | LevelsCollectionResponse | QuotesCollection

@injectable()
export class LoadGame {
  constructor(
    @injectAll(Types.LoadGame) private loadGame: Loader<LoaderResponse>[],
  ) {}

  async launch(): Promise<LoaderResponse[]> {
    const loadPromises = this.loadGame.map(loader => loader.execute());
    return await Promise.all(loadPromises);
  }
}
