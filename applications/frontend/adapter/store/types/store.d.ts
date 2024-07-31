export type {
  Player,
  Levels,
  Quotes,
  Quote,
  Color,
  Colors,
  ColorGroup,
} from '@gameContext/shared/infrastructure/store/store'

import { ColorStore } from '../slices/colorStore/colorStore'
import { PlayerStore } from '../slices/playerStore/playerStore'
import { QuoteStore } from '../slices/quoteStore/quoteStore'

export type Store = PlayerStore & QuoteStore & ColorStore
