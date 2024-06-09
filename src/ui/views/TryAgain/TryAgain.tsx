import { MdOutlineReplay as ReplayIcon } from "react-icons/md";
import { useShallow } from "zustand/react/shallow";
import { Progression } from "@/ui/components/Progression/Progression";
import { useStore } from "@/store/store";
import "./TryAgain.scss";

const TryAgainView = () => {
  const state = useStore(
    useShallow(({ currentLevel, levels }) => ({
      currentLevel,
      totalLevels: levels.length,
    })));

  return (
    <article className="try-again view">
      <h2 className="try-again__subtitle">You almost got in</h2>
      <h1 className="try-again__title">Try Again</h1>
      <button className="try-again__replay button --square">
        <ReplayIcon />
      </button>
      <Progression
        currentLevel={state.currentLevel}
        totalLevels={state.totalLevels}
      />
    </article>
  );
};

export { TryAgainView };
