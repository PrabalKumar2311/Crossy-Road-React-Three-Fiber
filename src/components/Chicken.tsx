function Chicken() {
  return (
    <group >
        <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          {/* Main body */}
          <mesh castShadow receiveShadow position={[0, 0, 13]}>
            <boxGeometry args={[7, 8, 14]} />
            <meshStandardMaterial color={0xffffff} flatShading />
          </mesh>

          {/* back body */}
          <mesh castShadow receiveShadow position={[0, -5.5, 9]}>
            <boxGeometry args={[7, 3, 6]} />
            <meshStandardMaterial color={0xffffff} flatShading />
          </mesh>

          {/* back body extension*/}
          <mesh castShadow receiveShadow position={[0, -7.5, 10.5]}>
            <boxGeometry args={[5, 1, 3]} />
            <meshStandardMaterial color={0xffffff} flatShading />
          </mesh>

          {/* Head accessory */}
          <mesh position={[0, 1, 21]} castShadow receiveShadow>
            <boxGeometry args={[2, 4, 2.2]} />
            <meshLambertMaterial color={0xff4fa3} flatShading />
          </mesh>

          {/* Nose */}
          <mesh position={[0, 5.5, 16.2]} castShadow receiveShadow>
            <boxGeometry args={[2, 3.5, 2.2]} />
            <meshLambertMaterial color={0xff9500} flatShading />
          </mesh>

          {/* Mouth */}
          <mesh position={[0, 5, 14]} castShadow receiveShadow>
            <boxGeometry args={[2, 2.4, 2.2]} />
            <meshLambertMaterial color={0xff4fa3} flatShading />
          </mesh>

          {/* Left Eye */}
          <mesh
            position={[-3.6, 2, 18]}
            rotation={[0, -Math.PI / 2, 0]}
            castShadow
            receiveShadow
          >
            <planeGeometry args={[1.5, 1.5]} />
            <meshLambertMaterial color="black" flatShading />
          </mesh>

          {/* Right Eye */}
          <mesh
            position={[3.6, 2, 17]}
            rotation={[0, Math.PI / 2, 0]}
            castShadow
            receiveShadow
          >
            <planeGeometry args={[1.5, 1.5]} />
            <meshLambertMaterial color="black" flatShading />
          </mesh>

          {/* Left feather */}
          <mesh castShadow receiveShadow position={[-4, -2, 9]}>
            <boxGeometry args={[2.5, 8, 3]} />
            <meshStandardMaterial color={0xffffff} flatShading />
          </mesh>

          {/* Right feather */}
          <mesh castShadow receiveShadow position={[4, -2, 9]}>
            <boxGeometry args={[2.5, 8, 3]} />
            <meshStandardMaterial color={0xffffff} flatShading />
          </mesh>

          {/* Left calf */}
          <mesh position={[-2, -1, 4]} castShadow receiveShadow>
            <boxGeometry args={[0.75, 0.75, 4]} />
            <meshLambertMaterial color={0xff9500} flatShading />
          </mesh>

          {/* Right calf */}
          <mesh position={[2, -1, 4]} castShadow receiveShadow>
            <boxGeometry args={[0.75, 0.75, 4]} />
            <meshLambertMaterial color={0xff9500} flatShading />
          </mesh>

          {/* Left foot */}
          <mesh position={[2, -1, 1.9]} castShadow receiveShadow>
            <boxGeometry args={[2.5, 2.5, 0.75]} />
            <meshLambertMaterial color={0xffa500} flatShading />
          </mesh>

          {/* Right foot */}
          <mesh position={[-2, -1, 1.9]} castShadow receiveShadow>
            <boxGeometry args={[2.5, 2.5, 0.75]} />
            <meshLambertMaterial color={0xffa500} flatShading />
          </mesh>

          {/* Left toes */}
          <mesh position={[2.88, 1, 1.9]} castShadow receiveShadow>
            <boxGeometry args={[0.75, 1.5, 0.75]} />
            <meshLambertMaterial color={0xff9500} flatShading />
          </mesh>

          <mesh position={[1.12, 1, 1.9]} castShadow receiveShadow>
            <boxGeometry args={[0.75, 1.5, 0.75]} />
            <meshLambertMaterial color={0xff9500} flatShading />
          </mesh>

          {/* Right toes */}
          <mesh position={[-2.88, 1, 1.9]} castShadow receiveShadow>
            <boxGeometry args={[0.75, 1.5, 0.75]} />
            <meshLambertMaterial color={0xff9500} flatShading />
          </mesh>

          <mesh position={[-1.12, 1, 1.9]} castShadow receiveShadow>
            <boxGeometry args={[0.75, 1.5, 0.75]} />
            <meshLambertMaterial color={0xff9500} flatShading />
          </mesh>
        </group>
        <ambientLight/>
      </group>
  )
}

export default Chicken
