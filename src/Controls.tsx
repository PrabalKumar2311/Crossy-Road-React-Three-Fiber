import { queueMove, state as playerState } from "./store/player"
import endsUpInvalidPosition from "./utilities/endsUpInvalidPosition"
import useEventListeners from './hooks/useEventListeners'
import './Controls.css';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from "react";

function Controls() {

  const [controlsVisible, setControlsVisible] = useState(false);
  const [invalidDir, setInvalidDir] = useState<string | null>(null);

  useEffect(()=>{
    setTimeout(()=> setControlsVisible(true), 2000)
  },[])

  useEventListeners();

  function attemptMove(direction: any) {
    const valid = endsUpInvalidPosition(
      { rowIndex: playerState.currentRow, tileIndex: playerState.currentTile },
      [...playerState.movesQueue, direction]
    );

    if (!valid) {
      setInvalidDir(direction);
      setTimeout(() => setInvalidDir(null), 500);
      return;
    }

    queueMove(direction);
  }

  const btnClass = (dir: string) =>
    invalidDir === dir ? "invalid" : "";

  useEffect(() => {
  const handler = (e: any) => {
    const dir = e.detail;
    setInvalidDir(dir);
    setTimeout(() => setInvalidDir(null), 500);
  };

  window.addEventListener("invalid-move", handler);
  return () => window.removeEventListener("invalid-move", handler);
}, []);



  return(
    <>
      { controlsVisible && (
        <div id="controls">
          <div>
            <button className={btnClass("forward")} onClick={() => attemptMove('forward')}>
              <ArrowUp />
            </button>

            <button className={btnClass("left")} onClick={() => attemptMove('left')}>
              <ArrowLeft />
            </button>

            <button className={btnClass("backward")} onClick={() => attemptMove('backward')}>
              <ArrowDown />
            </button>

            <button className={btnClass("right")} onClick={() => attemptMove('right')}>
              <ArrowRight />
            </button>
          </div>
        </div>  
      )}
    </>
  )
}

export default Controls
