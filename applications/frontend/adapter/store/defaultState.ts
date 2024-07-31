import { Store } from './types/store'

export const defaultState: Store = {
  player: {
    id: 'gordon-freeman',
    lives: 1,
    level: 0,
    score: 0,
    bonus: 0,
  },
  levels: {
    id: 'black-mesa',
    items: [],
    totalLevels: 0,
  },
  quotes: {
    id: 'quotes',
    items: [],
  },
  quote: {
    id: '1',
    text: 'Good morning, and welcome to the Black Mesa Transit System.',
    author: 'Black Mesa Transit System Announcer',
  },
  tutorialIsWatched: false,
}
