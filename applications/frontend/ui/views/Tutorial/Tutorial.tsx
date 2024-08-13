import { useNavigate } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { useClassnameOfRoute } from '@frontend/ui/hooks/useClassnameOfRoute/useClassnameOfRoute'
import { LocationDisplay } from '@frontend/ui/components/misc/LocationDisplay/LocationDisplay'
import {
  Tutorial,
  Title,
  Graphic,
  Active,
  Mixer,
  Swatch,
  Base,
  Next,
} from './Tutorial.styled'

const TutorialView = () => {
  useClassnameOfRoute()
  const navigate = useNavigate()

  const skipTutorial = () => {
    navigate('/game')
  }
  return (
    <Tutorial onClick={skipTutorial} className="view" data-testid="tutorial">
      <Title>MIX THE COLORS TO MATCH THE SAMPLES</Title>
      <Graphic>
        <Swatch />
        <Mixer />
        <Active />
        <Base />
      </Graphic>
      <Next to="/game">
        That's all! Shall we get started?
        <FaAngleRight />
      </Next>
      <LocationDisplay />
    </Tutorial>
  )
}

export { TutorialView }
