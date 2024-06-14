import { useNavigate } from "react-router-dom"
import { HeaderGame } from "@/ui/components/HeaderGame/HeaderGame"
import { Bonus } from "@/ui/components/Bonus/Bonus"
import { useStore } from "@/adapter/store/store"
import { useShallow } from "zustand/react/shallow"
import "./Game.scss"

const GameView = () => {
  const navigate = useNavigate();
  const state = useStore(
    useShallow((state) => ({
      currentLevel: state.currentLevel,
      score: state.score,
      lives: state.lives,
      bonus: state.bonus,
    }))
  )

  return (
    <article className="game view">
      <HeaderGame {...state} onBack={() => navigate("/")} />

			<section className="game__footer">
				<div className="game__bonus">
					<Bonus bonus={state.bonus} />
				</div>
			</section>
    </article>
  )
}

export { GameView }
