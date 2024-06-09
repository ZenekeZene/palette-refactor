import { useLocation } from "react-router-dom"
import './LocationDisplay.scss'

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}
