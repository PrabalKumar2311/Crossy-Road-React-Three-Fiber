import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import ResponsiveCamera from "./ResponsiveCamera";

type Props = {
  children: React.ReactNode;
};

export default function Scene({ children }: Props) {
  return (
    <Canvas shadows>
      <ambientLight intensity={1} />
      <Environment preset="city" />

      {/* Camera MUST be inside Canvas */}
      <ResponsiveCamera />

      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
    </Canvas>
  );
}
