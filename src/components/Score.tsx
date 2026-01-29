// Score.tsx
import useStore from "../store/game";
import "./Score.css";

export default function Score() {
  const score = useStore((state) => state.score);
  const status = useStore((state) => state.status);
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