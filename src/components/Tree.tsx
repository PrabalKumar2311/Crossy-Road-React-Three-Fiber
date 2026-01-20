import { tileSize } from "../constants";

type Props = {
  tileIndex: number;
  height: number;
};

function Tree({ tileIndex, height }: Props) {
  const darkHeight = 6;
  const lightHeight = 9;

  let currentZ = 20; // base of leaves

  return (
    <group position-x={tileIndex * tileSize}>
      
      {/* 🌲 Leaves made of stacked variable slices */}
      {Array.from({ length: Math.floor(height / 6) }).map((_, i) => {
        const isDark = i % 2 === 0;
        const sliceH = isDark ? darkHeight : lightHeight;

        const z = currentZ + sliceH / 2;
        currentZ += sliceH;

        return (
          <mesh key={i} position-z={z} castShadow>
            <boxGeometry args={[30, 30, sliceH]} />
            <meshLambertMaterial
              color={isDark ? 0x6F9A1F : 0x7aa21d}
              flatShading
            />
          </mesh>
        );
      })}

      {/* 🌳 Trunk */}
      <mesh position-z={10} castShadow>
        <boxGeometry args={[15, 15, 20]} />
        <meshLambertMaterial color={0x4d2926} flatShading />
      </mesh>
    </group>
  );
}


export default Tree
