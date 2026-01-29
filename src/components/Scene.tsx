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
    <Canvas shadows>
      <Suspense fallback={<Loader />}>
      <ambientLight intensity={1} />
      <Environment preset="city" />
      <ResponsiveCamera />
        {children}
      </Suspense>
    </Canvas>
  );
}
