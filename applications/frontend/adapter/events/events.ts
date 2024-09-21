export const events = {
  colorMixFailure: 'colorMixFailure',
  colorMixSuccess: 'colorMixSuccess',
  livesDecremented: 'livesDecremented',
  gameOver: 'gameOver',
}

export const createEvent = (eventName: string, payload?: unknown) => {
  const event = new CustomEvent(eventName, {
    detail: payload,
  })
  return event
}

export const dispatchEvent = (event: CustomEvent) => {
  document.dispatchEvent(event)
}

export const listenEvent = (eventName: string, handler: EventListener) => {
  document.addEventListener(eventName, handler)
  return () => unlistenEvent(eventName, handler)
}

export const unlistenEvent = (eventName: string, handler: EventListener) => {
  document.removeEventListener(eventName, handler)
}
