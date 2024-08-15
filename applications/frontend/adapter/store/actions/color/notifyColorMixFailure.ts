import { MixColorResponse } from '@frontend/adapter/store/types/store.d'
import {
  events,
  createEvent,
  dispatchEvent,
} from '@frontend/adapter/events/events'

const eventName = events.colorMixFailure

export const notifyColorMixFailure = (response: MixColorResponse) => {
  const { result } = response
  if (!result.isErr()) return
  const { failedColorGroup, correctColorGroup } = result.getErr()
  const event = createEvent(eventName, { failedColorGroup, correctColorGroup })
  dispatchEvent(event)
}
