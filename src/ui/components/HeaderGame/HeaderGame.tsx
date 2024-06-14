import { IoChevronBack as IconBack } from "react-icons/io5"
import { IconHeart } from "../IconHearth/IconHearth";
import './HeaderGame.scss'

interface HeaderGameProps {
	currentLevel: number;
	score: number;
	lives: number;
	onBack: () => void;
}

const HeaderGame = (props: HeaderGameProps) => {
	return (
		<header className="header-game">
			<div className="header-game__back" onClick={props.onBack}>
				<IconBack />
			</div>
			<div className="header-game__level">
				<span>Level {props.currentLevel}</span>
			</div>
			<div className="header-game__score">
				<span>{props.score}</span>
			</div>
			<div className="header-game__lives">
				{props.lives}<IconHeart />
			</div>
		</header>
	)
}

export { HeaderGame }
