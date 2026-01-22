import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";
import { useRef } from "react";
import useVehicleAnimation from "../hooks/useVehicleAnimation";
import useHitDetection from "../hooks/useHitDetection";

type Props = {
  rowIndex: number;
  initialTileIndex: number;
  direction: boolean;
  speed: number;
  color: THREE.ColorRepresentation;
};

export function Car({
  rowIndex,
  initialTileIndex,
  direction,
  speed,
  color,
}: Props) {
  const car = useRef<THREE.Group>(null);
  useVehicleAnimation(car, direction, speed);
  useHitDetection(car, rowIndex);
  
  return (
    <group
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
      ref={car}
    >
      {/* Main body */}
      <mesh position={[0, 0, 12]} castShadow>
        <boxGeometry args={[60, 30, 15]} />
        <meshLambertMaterial color={color} flatShading />
      </mesh>

      {/* Roof */}
      <mesh position={[-6, 0, 24.5]} castShadow>
        <boxGeometry args={[33, 24, 10]} />
        <meshLambertMaterial color={0xffffff} flatShading />
      </mesh>

      {/* Lights */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[30.1, 10, 15]}>
        <planeGeometry args={[4, 4]} />
        <meshLambertMaterial
          color="white"
          flatShading
        />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[30.1, -10, 15]}>
        <planeGeometry args={[4, 4]} />
        <meshLambertMaterial
          color="white"
          flatShading
        />
      </mesh>

      <Wheel x={-18} />
      <Wheel x={16} />
    </group>
  );
}
