// Score.tsx
import useStore from "../store/game";
import "./score.css";

export default function Score() {
  const score = useStore((state) => state.score);
  const topScore = useStore((state) => state.topScore);

  return (
    <div id="score">
      {score > 0 ? `${score}` : ''}
        {score > 0 ?<div id="top-score">
          Highest {topScore}
        </div> : null}
    </div>
  );
}