import "./Progression.scss";

const errorMessage = `Error with Progression component.
	CurrentLevel can not be major than totalLevels`;

interface Props {
  currentLevel: number;
  totalLevels: number;
}

const ProgressionList = ({ currentLevel, totalLevels }: Props) => {
  const isCompleted = (index: number) =>
    currentLevel > index ? "--completed" : "";

  return (
    <ul className="progression__list">
      {new Array(totalLevels).fill("").map((_, index) => (
        <li className={`progression__item ${isCompleted(index) ? '--completed' : ''}`}
					aria-label={`Level ${index} ${isCompleted(index) ? 'unfinished ': 'completed' }`}
				>{}</li>
      ))}
    </ul>
  );
};

const Progression = ({ currentLevel, totalLevels }: Props) => {
  if (currentLevel > totalLevels) throw new Error(errorMessage);
  const percent = Math.floor((currentLevel / totalLevels) * 100);

  return (
    <article className="progression">
      <p className="progression__text">
        Game progression:
        <span className="progression__percent">{percent}%</span>
      </p>
      <ProgressionList currentLevel={currentLevel} totalLevels={totalLevels} />
    </article>
  );
};

export { Progression };
