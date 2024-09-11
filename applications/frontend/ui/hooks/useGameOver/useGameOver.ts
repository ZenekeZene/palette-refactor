import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FinalView } from '@frontend/ui/views/Final/Final'
import { events, listenEvent } from '@frontend/adapter/events/events'

export const useGameOver = () => {
  const navigate = useNavigate()

  const handleGameOver = (() => {
    setTimeout(() => {
      navigate(FinalView.path)
      console.log('FinalView')
    }, 1000)
  }) as EventListener

  const memoizedGameOver = useCallback(handleGameOver, [handleGameOver])

  useEffect(() => {
    const unlistenGameOver = listenEvent(events.gameOver, memoizedGameOver)

    return () => {
      unlistenGameOver()
    }
  }, [memoizedGameOver])
}
