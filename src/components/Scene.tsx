import { OrbitControls, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Children, Suspense } from 'react'
import  DirectionalLight  from './DirectionalLight'
import Loader from './Loader'
        import { RoundedBox } from "@react-three/drei";

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
      <ambientLight intensity={1}/>
      <DirectionalLight />
      <Environment preset="city" />

      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
    </Canvas>
    </>
  )
}

export default Scene
