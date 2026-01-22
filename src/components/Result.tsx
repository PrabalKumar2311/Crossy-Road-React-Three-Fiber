import useStore from "../store/game";
import "./Result.css";
import { resetPlayer } from "../store/player";

export function Result() {
  const status = useStore((state) => state.status);
  const score = useStore((state) => state.score);
  const reset = useStore((state) => state.reset);

  if (status === "running") return null;

  return (
    <div id="result-container">
      <div id="result">
        <h1>Game Over</h1>
        <p>Your score: {score}</p>
        <button 
        onClick={() => {
          reset();
          resetPlayer();
        }}
        >Retry</button>
      </div>
    </div>
  );
}