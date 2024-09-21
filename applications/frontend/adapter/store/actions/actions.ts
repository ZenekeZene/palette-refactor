import { registerInMemory } from './registerInMemory'
import { nextLevel } from './nextLevel'
import { getNextQuote } from './getNextQuote'
import { mixColor } from './color/mixColor'
import { generateColors } from './color/generateColors'
import { getNextSwatchColor } from './color/getNextSwatchColor'
import { successColor } from './color/successColor'
import { failColor } from './color/failColor'
import { launchBonus } from './launchBonus'

export const actions = {
  registerInMemory,
  nextLevel,
  getNextQuote,
  mixColor,
  generateColors,
  getNextSwatchColor,
  successColor,
  failColor,
  launchBonus,
}
