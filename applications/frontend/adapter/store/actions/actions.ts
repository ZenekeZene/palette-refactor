import { registerInMemory } from './registerInMemory'
import { nextLevel } from './nextLevel'
import { getNextQuote } from './getNextQuote'
import { mixColor } from './color/mixColor'
import { generateColors } from './color/generateColors'
import { getNextSwatchColor } from './color/getNextSwatchColor'
import { notifyColorMixFailure } from './color/notifyColorMixFailure'
import { notifyColorMixSuccess } from './color/notifyColorMixSuccess'
import { successColor } from './color/successColor'
import { failColor } from './color/failColor'

export const actions = {
  registerInMemory,
  nextLevel,
  getNextQuote,
  mixColor,
  generateColors,
  getNextSwatchColor,
  notifyColorMixFailure,
  notifyColorMixSuccess,
  successColor,
  failColor,
}
