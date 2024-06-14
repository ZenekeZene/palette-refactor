import { AiFillThunderbolt as IconBonus } from "react-icons/ai"
import './Bonus.scss'

const Bonus = ({ bonus }: { bonus: number }) => {
	return (
		<div className="bonus">
			<IconBonus className="bonus__icon"/>
			<span className="bonus__score">{bonus}</span>
		</div>
	)
}

export { Bonus }
