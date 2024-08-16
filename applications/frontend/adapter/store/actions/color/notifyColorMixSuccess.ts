import { MixColorResponse } from '@frontend/adapter/store/types/store.d'
import {
  events,
  createEvent,
  dispatchEvent,
} from '@frontend/adapter/events/events'

const eventName = events.colorMixSuccess

export const notifyColorMixSuccess = (response: MixColorResponse) => {
  const { result } = response
  if (!result.isOk()) return
  const event = createEvent(eventName, {
    correctColorGroup: result.unwrap(),
  })
  dispatchEvent(event)
}
