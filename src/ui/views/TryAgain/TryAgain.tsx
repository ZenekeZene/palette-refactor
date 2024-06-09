import { MdOutlineReplay } from "react-icons/md";
import { Progression } from "@/ui/components/Progression/Progression"
import './TryAgain.scss';

const totalLevels = 20
const currentLevel = 3

const TryAgainView = () => {
	return (
		<article className="try-again view">
			<h2 className="try-again__subtitle">You almost got in</h2>
			<h1 className="try-again__title">Try Again</h1>
			<button className="try-again__replay button --square">
				<MdOutlineReplay />
			</button>
			<Progression
				currentLevel={currentLevel}
				totalLevels={totalLevels}
			/>
		</article>
	);
};

export { TryAgainView };
