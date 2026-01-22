// Rock.tsx
import { tileSize } from "../constants";

type Props = {
  tileIndex: number;
};

function Rock({ tileIndex }: Props) {
  return (
    <group position-x={tileIndex * tileSize}>
      {/* Main rock body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[40, 30, 30]} />
        <meshStandardMaterial
          color={0x8f9488}
          roughness={0.35}
          metalness={0.55}
          flatShading
        />
      </mesh>

      <mesh position={[5, 19, -3]} castShadow receiveShadow>
        <boxGeometry args={[30, 10, 24]} />
        <meshStandardMaterial
          color={0x8f9488}
          roughness={0.35}
          metalness={0.55}
          flatShading
        />
      </mesh>

      <mesh position={[-22, 0, 3]} castShadow receiveShadow>
        <boxGeometry args={[8, 30, 24]} />
        <meshStandardMaterial
          color={0x8f9488}
          roughness={0.35}
          metalness={0.55}
          flatShading
        />
      </mesh>

      <mesh position={[-4, 2, 18]} castShadow receiveShadow>
        <boxGeometry args={[15, 26, 6]} />
        <meshStandardMaterial
          color={0x8f9488}
          roughness={0.35}
          metalness={0.55}
          flatShading
        />
      </mesh>
    </group>
  );
}

export default Rock;