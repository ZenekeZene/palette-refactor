import { useCallback, useEffect, useState } from 'react'
import { events, listenEvent } from '@frontend/adapter/events/events'

export const useIsCorrectColorById = ({ id }: { id: string }) => {
  const [correctColorGroupId, setCorrectColorGroupId] = useState<
    string | undefined
  >(undefined)
  const [isEnable, setIsEnable] = useState<boolean>(false)

  const handleColorMixFailure = ((event: CustomEvent) => {
    const { detail } = event
    setCorrectColorGroupId(detail.correctColorGroup.id.value)
    setIsEnable(true)
  }) as EventListener

  const memoizedHandler = useCallback(handleColorMixFailure, [
    handleColorMixFailure,
  ])

  useEffect(() => {
    const unlisten = listenEvent(events.colorMixFailure, memoizedHandler)
    return unlisten
  }, [memoizedHandler])

  const isCorrect = correctColorGroupId === id

  return { isCorrect, isEnable }
}
