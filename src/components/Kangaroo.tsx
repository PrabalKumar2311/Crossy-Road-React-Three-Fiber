function Kangaroo() {

const brown = "rgb(126,88,68)"
const lightBrown = "rgb(204,139,112)"
const pink = "rgb(147,91,100)"
const darkBrown = "rgb(114,77,57)"
const nose = "rgb(78, 63, 51)"

  return (
      <group scale={0.5}>
        <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          {/* Main body */}
          <mesh castShadow receiveShadow position={[0, 0, 5]}>
            <boxGeometry args={[8, 13, 11]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Body */}
          <mesh castShadow receiveShadow position={[0, 4, 13]}>
            <boxGeometry args={[8, 5, 12]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Front Hair */}
          <mesh castShadow receiveShadow position={[0, 7.75, 9.25]}>
            <boxGeometry args={[8, 2.5, 19.5]} />
            <meshStandardMaterial color={lightBrown} flatShading />
          </mesh>

          {/* Left Arm */}
          <mesh castShadow receiveShadow position={[-5.5,6, 13.5]}>
            <boxGeometry args={[3, 3.3, 5.5]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Left Forearm */}
          <mesh castShadow receiveShadow position={[-5.5,10, 12]}>
            <boxGeometry args={[3, 4.75, 2.5]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Left Hand */}
          <mesh castShadow receiveShadow position={[-5.5,10.875, 9.5]}>
            <boxGeometry args={[3, 3, 2.5]} />
            <meshStandardMaterial color={darkBrown} flatShading />
          </mesh>

          
          {/* Right Arm */}
          <mesh castShadow receiveShadow position={[5.5,6, 13.5]}>
            <boxGeometry args={[3, 3.3, 5.5]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Right Forearm */}
          <mesh castShadow receiveShadow position={[5.5,10, 12]}>
            <boxGeometry args={[3, 4.75, 2.5]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Right Hand */}
          <mesh castShadow receiveShadow position={[5.5,10.875, 9.5]}>
            <boxGeometry args={[3, 3, 2.5]} />
            <meshStandardMaterial color={darkBrown} flatShading />
          </mesh>

          {/* Left Thigh */}
          <mesh castShadow receiveShadow position={[-6, 1.5, 3.5]}>
            <boxGeometry args={[4, 8, 8]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Left Leg */}
          <mesh castShadow receiveShadow position={[-6, 0, -1.7]}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Left Toes */}
          <mesh castShadow receiveShadow position={[-6, 7.75, -4.2]}>
            <boxGeometry args={[2.5, 2, 2.5]} />
            <meshStandardMaterial color={darkBrown} flatShading />
          </mesh>

          {/* Left Leg */}
          <mesh castShadow receiveShadow position={[-6, 2.75, -4.2]}>
            <boxGeometry args={[2.5, 8, 2.5]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Right Thigh */}
          <mesh castShadow receiveShadow position={[6, 1.5, 3.5]}>
            <boxGeometry args={[4, 8, 8]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Right Leg */}
          <mesh castShadow receiveShadow position={[6, 0, -1.7]}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Right Foot */}
          <mesh castShadow receiveShadow position={[6, 2.75, -4.2]}>
            <boxGeometry args={[2.5, 8, 2.5]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Right Toes */}
          <mesh castShadow receiveShadow position={[6, 7.75, -4.2]}>
            <boxGeometry args={[2.5, 2, 2.5]} />
            <meshStandardMaterial color={darkBrown} flatShading />
          </mesh>

          {/* Face */}
          <mesh castShadow receiveShadow position={[0, 7, 22]}>
            <boxGeometry args={[8, 11, 6]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Left Eye */}
          <mesh castShadow receiveShadow position={[-4.75,5.5, 23.6]}>
            <boxGeometry args={[1.5, 4, 2.8]} />
            <meshStandardMaterial color={'white'} flatShading />
          </mesh>

          <mesh castShadow receiveShadow position={[-4.75, 5.5, 25.6]}>
            <boxGeometry args={[1.5, 4, 1.2]} />
            <meshStandardMaterial color={darkBrown} flatShading />
          </mesh>

          {/* Left Eyeball */}
          <mesh
            position={[-5.51, 5.5, 24.25]}
            rotation={[0, -Math.PI / 2, 0]}
            castShadow
            receiveShadow
          >
            <planeGeometry args={[1.5, 1.5]} />
            <meshLambertMaterial color="black" flatShading />
          </mesh>

          {/* Right Eye */}
          <mesh castShadow receiveShadow position={[4.75, 5.5, 23.6]}>
            <boxGeometry args={[1.5, 4, 2.8]} />
            <meshStandardMaterial color={'white'} flatShading />
          </mesh>

          <mesh castShadow receiveShadow position={[4.75, 5.5, 25.6]}>
            <boxGeometry args={[1.5, 4, 1.2]} />
            <meshStandardMaterial color={darkBrown} flatShading />
          </mesh>

          {/* Right Eyeball */}
          <mesh
            position={[5.51, 5.5, 24.25]}
            rotation={[0, Math.PI / 2, 0]}
            castShadow
            receiveShadow
          >
            <planeGeometry args={[1.5, 1.5]} />
            <meshLambertMaterial color="black" flatShading />
          </mesh>

          {/* Upper Jaw */}
          <mesh castShadow receiveShadow position={[0, 13.87, 23.5]}>
            <boxGeometry args={[8, 2.75, 3]} />
            <meshStandardMaterial color={darkBrown} flatShading />
          </mesh>

          {/* Nose front */}
          <mesh
            castShadow
            receiveShadow
            position={[0, 15.25, 24.26]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[5, 1.5]} />
            <meshStandardMaterial color={nose} />
          </mesh>

          {/* Nose above */}
          <mesh
            castShadow
            receiveShadow
            position={[0, 14.5, 25.01]}
          >
            <planeGeometry args={[5, 1.5]} />
            <meshStandardMaterial color={nose} />
          </mesh>

          {/* Lower Jaw */}
          <mesh castShadow receiveShadow position={[0, 13.87, 19.75]}>
            <boxGeometry args={[8, 2.75, 1.5]} />
            <meshStandardMaterial color={darkBrown} flatShading />
          </mesh>

          {/* Inner Tongue */}
          <mesh castShadow receiveShadow position={[0, 13.995, 21.25]}>
            <boxGeometry args={[5, 3, 1.5]} />
            <meshStandardMaterial color={pink} flatShading />
          </mesh>

          {/* Outer Tongue */}
          <mesh castShadow receiveShadow position={[0, 15.995, 19.75]}>
            <boxGeometry args={[5, 1.5, 4.5]} />
            <meshStandardMaterial color={pink} flatShading />
          </mesh>

          {/* Forehead */}
          <mesh castShadow receiveShadow position={[0, 5.38, 26.35]}>
            <boxGeometry args={[8, 7.75, 3]} />
            <meshStandardMaterial color={brown} flatShading />
          </mesh>

          {/* Left ear */}
          <mesh castShadow receiveShadow position={[-3.2, 3.25, 29.35]}>
            <boxGeometry args={[1.6, 3.5, 3]} />
            <meshStandardMaterial color={darkBrown} flatShading />
          </mesh>

          {/* Right ear */}
          <mesh castShadow receiveShadow position={[3.2, 3.25, 29.35]}>
            <boxGeometry args={[1.6, 3.5, 3]} />
            <meshStandardMaterial color={darkBrown} flatShading />
          </mesh>
        </group>
        <ambientLight />
      </group>
  );
}

export default Kangaroo;
