import './Progression.scss'

interface Props {
	currentLevel: number,
	totalLevels: number,
}

const ProgressionList = ({ currentLevel, totalLevels }: Props) => {
	const getClassname = (index: number) => currentLevel > index ? '--completed': ''

	return (
		<ul className="progression__list">
			{ new Array(totalLevels).fill('').map((_, index) => (
				<li className={`progression__item ${getClassname(index)}`}>{}</li>
			))}
		</ul>
	)
}

const Progression = ({ currentLevel, totalLevels }: Props) => {
	const percent = (currentLevel / totalLevels) * 100

	return (
		<article className="progression">
			<p className="progression__text">Game progression: <span className="progression__percent">{percent}%</span></p>
			<ProgressionList
				currentLevel={currentLevel}
				totalLevels={totalLevels}
			/>
		</article>
	);
};

export { Progression };
