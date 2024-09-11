import { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import { LevelDTO } from '@gameContext/level/application/dto/LevelDTO'
import { LevelsCollectionResponse } from '@gameContext/level/application/dto/LevelsCollectionResponse'
import { QuotesCollectionResponse } from '@gameContext/quote/application/dto/QuotesCollectionResponse'
import { QuoteDTO } from '@gameContext/quote/application/dto/QuoteDTO'
import { ColorChipDTO } from '@gameContext/color/application/dto/ColorChip'
import {
  GenerateColorsItem,
  GenerateColorsResponse,
} from '@gameContext/color/application/dto/GenerateColorsResponse'
import type { ColorChipTypeOf } from '@gameContext/color/domain/models/colorChip/ColorChipType'
import { ColorGroupStatusTypes } from '@gameContext/color/domain/models/colorGroup/ColorGroupStatus'
import type { ColorGroupStatusType } from '@gameContext/color/domain/models/colorGroup/ColorGroupStatus'
export { ColorTypes } from '@gameContext/color/domain/models/colorChip/ColorChipType'

export type { LevelDTO as Level }
export type { PlayerResponse as Player }
export type { LevelsCollectionResponse as Levels }
export type { QuotesCollectionResponse as Quotes }
export type { QuoteDTO as Quote }
export type { ColorChipDTO as Color }
export type { GenerateColorsResponse as Colors }
export type { GenerateColorsItem as ColorGroup }
export type { ColorChipTypeOf as ColorTypeOf }
export { ColorGroupStatusTypes as ColorStatusTypes }
export type { ColorGroupStatusType as ColorStatusType }
