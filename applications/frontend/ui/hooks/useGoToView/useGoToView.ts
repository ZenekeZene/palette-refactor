import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { events, listenEvent } from '@frontend/adapter/events/events'
import { TryAgainView } from '@frontend/ui/views/TryAgain/TryAgain'
import { FinalView } from '@frontend/ui/views/Final/Final'

const delayed = (callback: (path: string) => void, path: string) => {
  setTimeout(() => {
    callback(path)
  }, 1000)
}

const views = [
  { event: events.gameOver, path: FinalView.path },
  { event: events.livesDecremented, path: TryAgainView.path },
]

export const useGoToView = () => {
  const navigate = useNavigate()

  const createEventHandler = (path: string) => {
    return (() => {
      delayed(navigate, path)
    }) as EventListener
  }

  const eventHandlers = views.map(({ event, path }) => ({
    event,
    handler: createEventHandler(path),
  }))

  useEffect(() => {
    const unlistenFunctions = eventHandlers.map(({ event, handler }) =>
      listenEvent(event, handler),
    )

    return () => {
      unlistenFunctions.forEach((unlisten) => unlisten())
    }
  }, [eventHandlers])
}
