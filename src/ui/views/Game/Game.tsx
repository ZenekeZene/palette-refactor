import { useNavigate } from "react-router-dom"
import { HeaderGame } from "@/ui/components/HeaderGame/HeaderGame"
import { Bonus } from "@/ui/components/Bonus/Bonus"
import { GameChip } from "@/ui/components/GameChip/GameChip"
import { useStore } from "@/adapter/store/store"
import { useShallow } from "zustand/react/shallow"
import "./Game.scss"

const GameView = () => {
  const navigate = useNavigate();
  const livesAndFriends = useStore(
    useShallow((state) => ({
      currentLevel: state.currentLevel,
      score: state.score,
      lives: state.lives,
      bonus: state.bonus,
    }))
  )

  return (
    <article className="game view">
      <HeaderGame {...livesAndFriends} onBack={() => navigate("/")} />

      <div className="game__divider"></div>

			<section className="game__footer">
        <div className="game__chip">
          <GameChip />
        </div>
        { livesAndFriends.bonus > 0 && (
          <div className="game__bonus">
            <Bonus bonus={livesAndFriends.bonus} />
          </div>
        )}
			</section>
    </article>
  )
}

export { GameView }
