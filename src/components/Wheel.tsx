export function Wheel({ x }: { x: number }) {
  return (
    <group>
      <mesh position={[x, 0, 6]}>
        <boxGeometry args={[12, 33, 12]} />
        <meshLambertMaterial color={0x333333} flatShading />

        <mesh
          position={[0, 16.6, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
          receiveShadow
        >
          <planeGeometry args={[5, 5]} />
          <meshLambertMaterial color="white" flatShading />
        </mesh>

        <mesh
          position={[0, -16.6, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
          receiveShadow
        >
          <planeGeometry args={[5, 5]} />
          <meshLambertMaterial color="white" flatShading />
        </mesh>
      </mesh>
    </group>
  );
}
