import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useClassnameOfRoute } from '@/ui/hooks/useClassnameOfRoute/useClassnameOfRoute';
import './Tutorial.scss';

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

const TutorialView = () => {
	useClassnameOfRoute()
	const navigate = useNavigate()

	const skipTutorial = () => {
		navigate('/game')
	}
	return (
		<aside onClick={skipTutorial} className="tutorial" data-testid="tutorial">
			<h1 className="tutorial__title">MIX THE COLORS TO MATCH THE SAMPLES</h1>
			<section className="tutorial__graphic tutorial-graphic">
				<div className="tutorial-graphic__swatch"></div>
				<div className="tutorial-graphic__mixer"></div>
				<div className="tutorial-graphic__active"></div>
				<div className="tutorial-graphic__base"></div>
			</section>
			<Link to="/game" className="tutorial__next">That's all! Shall we get started?<FaAngleRight /></Link>
			<LocationDisplay />
		</aside>
	);
};

export { TutorialView }
