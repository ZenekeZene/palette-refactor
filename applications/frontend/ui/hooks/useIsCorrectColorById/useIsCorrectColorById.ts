import { useCallback, useEffect, useState } from 'react'
import { events, listenEvent } from '@frontend/adapter/events/events'

export const useIsCorrectColorById = ({ id }: { id: string }) => {
  const [correctColorGroupId, setCorrectColorGroupId] = useState<
    string | undefined
  >(undefined)
  const [isFailureEnable, setIsFailureEnable] = useState<boolean>(false)

  const handleColorMixFailure = ((event: CustomEvent) => {
    const { detail } = event
    setCorrectColorGroupId(detail.correctColorGroupId)
    setIsFailureEnable(true)
  }) as EventListener

  const memoizedFailureHandler = useCallback(handleColorMixFailure, [
    handleColorMixFailure,
  ])

  useEffect(() => {
    const unlistenFailure = listenEvent(
      events.colorMixFailure,
      memoizedFailureHandler,
    )

    return () => {
      unlistenFailure()
    }
  }, [memoizedFailureHandler])

  const isCorrect = correctColorGroupId === id

  return { isCorrect, isFailureEnable }
}
