import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ResponsiveCamera from "./ResponsiveCamera";
import { Suspense } from "react";
import Loader from "./Loader";

type Props = {
  children: React.ReactNode;
};

export default function Scene({ children }: Props) {
  return (
    <Canvas shadows 
    style={{
      touchAction: 'none',
      width: "100%",
    height: "100%",
    display: "block",
    }}>
      <Suspense fallback={<Loader />}>
      <ambientLight intensity={1} />
      <Environment preset="city" />
      <ResponsiveCamera />
        {children}
      </Suspense>
    </Canvas>
  );
}
