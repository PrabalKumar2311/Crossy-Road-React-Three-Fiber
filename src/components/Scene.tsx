import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Children } from 'react'
import  DirectionalLight  from './DirectionalLight'

export const Scene = ({ children } : { children: React.ReactNode }) => {
  return (
    <>
    <Canvas orthographic={true} 
    camera={{
      up: [0,0,1],
      position: [300, -300, 300]
    }}
    shadows={true}
    >
      <ambientLight/>
      <DirectionalLight />
      {children}
    </Canvas>
    </>
  )
}

export default Scene
