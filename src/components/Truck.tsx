import * as THREE from "three";
import { useRef } from "react";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";
import useVehicleAnimation from "../hooks/useVehicleAnimation";
import useHitDetection from "../hooks/useHitDetection";

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
  useHitDetection(truck, rowIndex);

  return (
    <group
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
      ref={truck}
    >
      <mesh position={[33, 0, 25]} castShadow>
        <boxGeometry args={[20, 30, 10]} />
        <meshMatcapMaterial color={color} flatShading />
      </mesh>

      <mesh position={[35, 0, 14]} castShadow>
        <boxGeometry args={[24, 30, 12]} />
        <meshMatcapMaterial color={color} flatShading />
      </mesh>

      <mesh position={[35, 0, 5.5]} castShadow>
        <boxGeometry args={[24.01, 30, 5]} />
        <meshMatcapMaterial color={0x7f8aa6} flatShading />
      </mesh>

      {/* Truck compartment */}
      <group position={[-15, 0, 27]}>

      <mesh castShadow position={[0,0,-3.5]}>
        <boxGeometry args={[70, 35, 30]} />
        <meshMatcapMaterial color={0xb4c6fc} flatShading />
      </mesh>

      {/* Lower compartment */}
      <mesh castShadow position={[0,0,-20]}>
        <boxGeometry args={[65, 32.5, 4]} />
        <meshMatcapMaterial color={0x7f8aa6} flatShading />
      </mesh>


      {/* Front tapes */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[35.04, 0, 10]}>
        <planeGeometry args={[3, 35]} />
        <meshMatcapMaterial color="lightgrey" flatShading />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[35.04, 0, -17]}>
        <planeGeometry args={[3, 35]} />
        <meshMatcapMaterial color="lightgrey" flatShading />
      </mesh>

      {/* Back tapes */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[-35.04, 0, 10]}>
        <planeGeometry args={[3, 35]} />
        <meshMatcapMaterial color="lightgrey" flatShading />
      </mesh>

      <mesh rotation={[0, -Math.PI / 2, 0]} position={[-35.04, 0, -17]}>
        <planeGeometry args={[3, 35.04]} />
        <meshMatcapMaterial color="lightgrey" flatShading />
      </mesh>

      {/* Inner back tapes  */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[-35.04, 12, -3]}>
        <planeGeometry args={[29, 2.5]} />
        <meshMatcapMaterial color="lightgrey" flatShading />
      </mesh>

      <mesh rotation={[0, -Math.PI / 2, 0]} position={[-35.04, -12, -3]}>
        <planeGeometry args={[29, 2.5]} />
        <meshMatcapMaterial color="lightgrey" flatShading />
      </mesh>

      <mesh rotation={[0, -Math.PI / 2, 0]} position={[-35.04, 0, -10]}>
        <planeGeometry args={[2.5, 25]} />
        <meshMatcapMaterial color="lightgrey" flatShading />
      </mesh>

      {/* Side tapes */}

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -17.55, 10]}>
        <planeGeometry args={[70.1, 3]} />
        <meshMatcapMaterial color="lightgrey" flatShading />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -17.55, -17]}>
        <planeGeometry args={[70.1, 3]} />
        <meshMatcapMaterial color="lightgrey" flatShading />
      </mesh>


      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 17.55, 10]}>
        <planeGeometry args={[70.1, 3]} />
        <meshMatcapMaterial color="lightgrey" flatShading />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 17.55, -17]}>
        <planeGeometry args={[70.1, 3]} />
        <meshMatcapMaterial color="lightgrey" flatShading />
      </mesh>

      </group>

      {/* Roof */}
      <mesh position={[28.5, 0, 31.5]} castShadow>
        <boxGeometry args={[11, 23, 3]} />
        <meshMatcapMaterial color='white' flatShading />
      </mesh>

      {/* Roof extension*/}
      <mesh position={[26.5, 0, 33.7]} castShadow>
        <boxGeometry args={[7, 23, 3]} />
        <meshMatcapMaterial color='white' flatShading />
      </mesh>

      {/* Lights */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[47.1, 10, 10]}>
        <planeGeometry args={[4, 4]} />
        <meshMatcapMaterial color="white" flatShading />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[47.1, -10, 10]}>
        <planeGeometry args={[4, 4]} />
        <meshMatcapMaterial color="white" flatShading />
      </mesh>

      {/* Grill */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[47.1, 0, 10]}>
        <planeGeometry args={[8, 10]} />
        <meshMatcapMaterial color={darkColor} flatShading />
      </mesh>

      {/* Windows */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[43.05, 0, 24]}>
        <planeGeometry args={[8, 30.1]} />
        <meshMatcapMaterial color="black" flatShading />
      </mesh>

      <mesh rotation={[Math.PI/2,0, 0]} position={[36.1, -15.05, 24]}>
        <planeGeometry args={[14, 8]} />
        <meshMatcapMaterial color="black" flatShading />
      </mesh>

      <mesh rotation={[ -Math.PI/2,0, 0]} position={[36.1, 15.05, 24]}>
        <planeGeometry args={[14, 8]} />
        <meshMatcapMaterial color="black" flatShading />
      </mesh>

      {/* Rear view mirrors */}
      <mesh position={[38, 16.5, 17]} >
        <boxGeometry args={[4, 3, 6]} />
        <meshMatcapMaterial color={color}  />
      </mesh>

      <mesh position={[38, -16.5, 17]} >
        <boxGeometry args={[4, 3, 6]} />
        <meshMatcapMaterial color={color} />
      </mesh>
      

      <Wheel x={-35} />
      <Wheel x={-5} />
      <Wheel x={35} />
    </group>
  );
}
