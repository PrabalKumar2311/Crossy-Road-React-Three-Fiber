// Score.tsx
import useStore from "../store/game";
import "./Score.css";
import { shallow } from "zustand/shallow"; // Import shallow for comparison

export default function Score() {
  // Use individual selectors instead of creating an object
  const score = useStore((state) => state.score);
  const status = useStore((state) => state.status);
  const topScore = useStore((state) => state.topScore);

  return (
    <div id="score">
      {score > 0 ? `${score}` : ''}
      
      {status === "over" && topScore > 0 && (
        <div id="top-score">
          TOP {topScore}
        </div>
      )}
    </div>
  );
}