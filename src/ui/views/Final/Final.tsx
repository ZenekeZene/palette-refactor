import { useStore } from "@/store/store"
import { useShallow } from "zustand/react/shallow"
import "./Final.scss"

const FinalView = () => {
  const state = useStore(
		useShallow(({ currentLevel, score }) => ({
			currentLevel,
			score,
		})))

  return (
    <article className="final view">
      <header className="final__header"></header>
      <section className="final__body">
        <h1 className="final__title">Well done!</h1>
        <h2 className="final__subtitle">
          You have finished with{" "}
          <span className="final__score">{state.score} points at level</span>
        </h2>
        <div className="final__level">
          <p className="final__level-score">{state.currentLevel}</p>
          <img className="final__laurel" src="/laurel.svg" alt="" />
          <a className="final__share">SHARE YOUR RECORD</a>
        </div>
      </section>
      <img className="final__illustration" src="/pet.png" alt="" />
    </article>
  )
}

export { FinalView }
