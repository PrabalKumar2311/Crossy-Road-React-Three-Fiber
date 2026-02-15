import Scene from "./components/Scene";
import Player from "./components/Player";
import Map from "./components/Map";
// import { OrbitControls, Stats } from "@react-three/drei";
import Controls from "./Controls";
import "./Game.css";
import Score from "./components/Score";
import { Result } from "./components/Result";
// import {useState, useEffect } from 'react'
// import { FaInfoCircle } from "react-icons/fa";

function Game() {

  // const [isMobile, setIsMobile] = useState(false);
  // const [hasMoved, setHasMoved] = useState(false);


  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);

  //   const handleFirstMove = () => setHasMoved(true);

  //   window.addEventListener("player-first-move", handleFirstMove);

  //   return () => {
  //     window.removeEventListener("resize", checkMobile)
  //     window.removeEventListener("player-first-move", handleFirstMove);
  // };
  // }, []);

  return (
    <div className="game">
        {/* {isMobile && !hasMoved && (
        <div className="mobile-info">
          <FaInfoCircle size={24} />
        </div>
      )} */}

        <Scene>
          {/* <OrbitControls enableRotate={true} enablePan={true} enableZoom={true} /> */}
          <Player />
          <Map />
        </Scene>
        <Score />
        <Controls />
        {/* <Stats/> */}
        <Result />
    </div>
  );
}

export default Game;
