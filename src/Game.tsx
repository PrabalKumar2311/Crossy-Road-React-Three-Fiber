import React from "react";
import  Scene  from "./components/Scene";
import Player from "./components/Player";
import Map from "./components/Map";
import { OrbitControls } from "@react-three/drei";
import Controls  from './Controls'
import './Game.css'
import  Score  from "./components/Score";

function Game() {
  return (
    <div className="game">
    <Scene>
      {/* <OrbitControls enableRotate={true} enablePan={true} enableZoom={true} /> */}
      <Player />
      <Map />
    </Scene>
    <Score />
    <Controls/>
    </div>
  );
}

export default Game;
