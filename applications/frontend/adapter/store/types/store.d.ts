export type {
  Player,
  Levels,
  Quotes,
  Quote,
  Color,
  Colors,
  ColorGroup,
  ColorTypeOf,
  MixColorResponse,
  ColorGroupStatusTypes,
  ColorStatusType,
} from '@gameContext/shared/infrastructure/store/store'
export { ColorTypes } from '@gameContext/shared/infrastructure/store/store.d'
export { ColorStatusTypes } from '@gameContext/shared/infrastructure/store/store.d'

import { ColorStore } from '../slices/colorStore/colorStore'
import { PlayerStore } from '../slices/playerStore/playerStore'
import { QuoteStore } from '../slices/quoteStore/quoteStore'

export type Store = PlayerStore & QuoteStore & ColorStore
