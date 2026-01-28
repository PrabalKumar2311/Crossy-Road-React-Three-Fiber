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
  const darkColor = new THREE.Color(color).multiplyScalar(0.4);
  
  return (
    <group
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
      ref={car}
    >
      {/* Main body */}
      <mesh position={[0, 0, 14]} castShadow>
        <boxGeometry args={[60, 30, 10]} />
        <meshLambertMaterial color={color} flatShading />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[30.01, 0, 14]}>
        <planeGeometry args={[5, 10]} />
        <meshMatcapMaterial color={darkColor} flatShading />
      </mesh>

      {/* Textures */}
      <mesh rotation={[0, 0, Math.PI / 2]} position={[21, 0, 19.01]}>
        <planeGeometry args={[14, 18]} />
        <meshMatcapMaterial color={darkColor} flatShading />
      </mesh>

      <mesh rotation={[0, 0, Math.PI / 2]} position={[-24, 0, 19.01]}>
        <planeGeometry args={[14, 12]} />
        <meshMatcapMaterial color={darkColor} flatShading />
      </mesh>

      <mesh position={[0, 0, 7]} castShadow>
        <boxGeometry args={[60, 30, 4]} />
        <meshLambertMaterial color={0x7f8aa6} flatShading />
      </mesh>

      {/* Spoiler */}
      <mesh position={[-28, 0, 21]} castShadow>
        <boxGeometry args={[4, 14, 4]} />
        <meshLambertMaterial color={darkColor} flatShading />
      </mesh>

      {/* Roof */}
      <mesh position={[-3, 0, 24.5]} castShadow>
        <boxGeometry args={[30, 24, 12]} />
        <meshLambertMaterial color={0xffffff} flatShading />
      </mesh>

      {/* Lights */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[30.1, 10, 14]}>
        <planeGeometry args={[4, 4]} />
        <meshLambertMaterial
          color="white"
          flatShading
        />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[30.1, -10, 14]}>
        <planeGeometry args={[4, 4]} />
        <meshLambertMaterial
          color="white"
          flatShading
        />
      </mesh>

      {/* Back lights */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[-30.05, 0, 11]}>
        <planeGeometry args={[4, 18]} />
        <meshMatcapMaterial color="#875555" flatShading />
      </mesh>

      {/* Windows */}
      {/* Front */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[12.05, 0, 23]}>
        <planeGeometry args={[8, 18]} />
        <meshMatcapMaterial color="black" flatShading />
      </mesh>

      {/* Right back */}
      <mesh rotation={[Math.PI/2,0, 0]} position={[-13, -12.01, 23]}>
        <planeGeometry args={[4, 8]} />
        <meshMatcapMaterial color="black" flatShading />
      </mesh>

      {/* Right front */}
      <mesh rotation={[Math.PI/2,0, 0]} position={[0, -12.01, 23]}>
        <planeGeometry args={[18, 8]} />
        <meshMatcapMaterial color="black" flatShading />
      </mesh>

      {/* Left back */}
      <mesh rotation={[ -Math.PI/2,0, 0]} position={[-13, 12.01, 23]}>
        <planeGeometry args={[4, 8]} />
        <meshMatcapMaterial color="black" flatShading />
      </mesh>

      {/* Left front */}
      <mesh rotation={[ -Math.PI/2,0, 0]} position={[0, 12.01, 23]}>
        <planeGeometry args={[18, 8]} />
        <meshMatcapMaterial color="black" flatShading />
      </mesh>

      <mesh rotation={[0, -Math.PI / 2, 0]} position={[-18.05, 0, 23]}>
        <planeGeometry args={[8, 18]} />
        <meshMatcapMaterial color="black" flatShading />
      </mesh>

      {/* Rear view mirrors */}
      <mesh position={[10.5, 14, 22]} >
        <boxGeometry args={[3, 4, 6]} />
        <meshMatcapMaterial color={darkColor}  />
      </mesh>

      <mesh position={[10.5, -14, 22]} >
        <boxGeometry args={[3, 4, 6]} />
        <meshMatcapMaterial color={darkColor} />
      </mesh>

      {/* Tapes */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -15.01, 10.5]}>
        <planeGeometry args={[60, 3]} />
        <meshMatcapMaterial color={darkColor} flatShading />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 15.01, 10.5]}>
        <planeGeometry args={[60, 3]} />
        <meshMatcapMaterial color={darkColor} flatShading />
      </mesh>

      <Wheel x={-18} />
      <Wheel x={16} />
    </group>
  );
}
