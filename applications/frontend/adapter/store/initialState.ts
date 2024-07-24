import { container } from "tsyringe";
import { LoadGame } from "@gameContext/shared/application/loadGame";
import { StoreState, Player, Levels, Quotes } from "./store";
import { actions } from "./actions/actions";

export const createInitialState = async (): Promise<StoreState> => {
  const loadGame = container.resolve(LoadGame);
  const responses = await loadGame.launch();
  const [playerResponse, levelsResponse, quotesResponse] = responses;
  const player = playerResponse as Player;
  const levels = levelsResponse as Levels;
  const quotes = quotesResponse as Quotes;
  actions.registerInMemory(player, levels, quotes);
  const quote = await actions.getNextQuote(quotes);

  return {
    player,
    levels,
    quotes,
    quote,
    tutorialIsWatched: false,
  };
};
