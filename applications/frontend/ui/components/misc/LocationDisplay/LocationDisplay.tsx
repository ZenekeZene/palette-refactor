import { useLocation } from 'react-router-dom'

export const LocationDisplay = () => {
  const location = useLocation()

  return (
    <div data-testid="location-display" style={{ visibility: 'hidden' }}>
      {location.pathname}
    </div>
  )
}
