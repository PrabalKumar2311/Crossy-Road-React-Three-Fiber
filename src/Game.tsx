import React from 'react'
import { Scene } from './components/Scene';
import Player from './components/Player'
import Map from './components/Map'
import { OrbitControls } from '@react-three/drei';

function Game() {
  return (
      <Scene>
           <OrbitControls
  enableRotate={true}
  enablePan={false}
  enableZoom={false}
/>

        <Player/>
        <Map/>
      </Scene>
  )
}

export default Game
