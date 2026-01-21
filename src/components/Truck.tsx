import * as THREE from "three";
import { useRef } from "react";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";
import useVehicleAnimation from "../hooks/useVehicleAnimation";

type Props = {
  rowIndex: number;
  initialTileIndex: number;
  direction: boolean;
  speed: number;
  color: THREE.ColorRepresentation;
};

export function Truck({
  rowIndex,
  initialTileIndex,
  direction,
  speed,
  color,
}: Props) {
  const truck = useRef<THREE.Group>(null);
  useVehicleAnimation(truck, direction, speed);
  const darkColor = new THREE.Color(color).multiplyScalar(0.6);

  return (
    <group
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
      ref={truck}
    >
      <mesh position={[38, 0, 30]} castShadow>
        <boxGeometry args={[30, 30, 14]} />
        <meshLambertMaterial color={color} flatShading />
      </mesh>
      <mesh position={[39.5, 0, 15.5]} castShadow>
        <boxGeometry args={[33, 30, 16]} />
        <meshLambertMaterial color={color} flatShading />
      </mesh>

      <mesh position={[-15, 0, 25]} castShadow>
        <boxGeometry args={[70, 35, 35]} />
        <meshLambertMaterial color={0xb4c6fc} flatShading />
      </mesh>

      {/* Roof */}
      <mesh position={[28.25, 0, 39.5]} castShadow>
        <boxGeometry args={[10, 23, 3]} />
        <meshLambertMaterial color='white' flatShading />
      </mesh>

      {/* Roof extension*/}
      <mesh position={[26.25, 0, 41.5]} castShadow>
        <boxGeometry args={[6, 23, 3]} />
        <meshLambertMaterial color='white' flatShading />
      </mesh>

      {/* Lights */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[56.1, 10, 17]}>
        <planeGeometry args={[4, 4]} />
        <meshLambertMaterial color="white" flatShading />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[56.1, -10, 17]}>
        <planeGeometry args={[4, 4]} />
        <meshLambertMaterial color="white" flatShading />
      </mesh>

      {/* Grill */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[56.1, 0, 17]}>
        <planeGeometry args={[8, 12]} />
        <meshLambertMaterial color={darkColor} flatShading />
      </mesh>

      {/* Windows */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[53.01, 0, 28]}>
        <planeGeometry args={[10, 30]} />
        <meshLambertMaterial color="black" flatShading />
      </mesh>

      <mesh rotation={[Math.PI/2,0, 0]} position={[46.1, -15.01, 28.25]}>
        <planeGeometry args={[14, 9.5]} />
        <meshLambertMaterial color="black" flatShading />
      </mesh>

      <mesh rotation={[ -Math.PI/2,0, 0]} position={[46.1, 15.01, 28.25]}>
        <planeGeometry args={[14, 9.5]} />
        <meshLambertMaterial color="black" flatShading />
      </mesh>

      

      <Wheel x={-35} />
      <Wheel x={-5} />
      <Wheel x={35} />
    </group>
  );
}
