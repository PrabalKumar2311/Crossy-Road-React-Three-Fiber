import { queueMove } from "./store/player"
import  useEventListeners  from './hooks/useEventListeners'
import './Controls.css';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from "react";

function Controls() {

  const [controlsVisible, setControlsVisible] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setControlsVisible(true);
    },2000)
  },[])

  useEventListeners();

    return(
      <>
      { controlsVisible && (
        <div id="controls">
        <div>
        <button onClick={() => queueMove('forward')}><ArrowUp /></button>
        <button onClick={() => queueMove('left')}><ArrowLeft /></button>
        <button onClick={() => queueMove('backward')}><ArrowDown /></button>
        <button onClick={() => queueMove('right')}><ArrowRight /></button>
        </div>
        </div>  
      )}
      </>
    )
}

export default Controls
