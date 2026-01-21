import {Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Children, Suspense } from 'react'
import Loader from './Loader'

type Props = {
  children: React.ReactNode;
};

export const Scene = ({ children }: Props) => {
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
      <Environment preset="city" />
      {/* <Suspense fallback={<Loader />}> */}
        {children}
      {/* </Suspense> */}
    </Canvas>
    </>
  )
}

export default Scene
