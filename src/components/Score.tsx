import useStore from "../store/game";
import "./Score.css";

export default function Score() {
  const score = useStore((state) => state.score);

  return (
  <div id="score">
    {score > 0 ? `${score}` : ''}
    </div>
    )
}
