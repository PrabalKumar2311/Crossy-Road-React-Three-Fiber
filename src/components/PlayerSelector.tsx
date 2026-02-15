// import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import "./PlayerSelection.css";
// import Player from "./Player";

// function PlayerSelection() {
//   const [mounted, setMounted] = useState(false);
//   const [fadingOut, setFadingOut] = useState(false);

//   // show after 2 seconds
//   useEffect(() => {
//     const showTimer = setTimeout(() => setMounted(true), 2000);
//     return () => clearTimeout(showTimer);
//   }, []);

//   // fade out after first move
//   useEffect(() => {
//     const handler = () => {
//       setFadingOut(true);

//       // remove after fade animation finishes
//       setTimeout(() => setMounted(false), 300);
//     };

//     window.addEventListener("player-first-move", handler);
//     return () => window.removeEventListener("player-first-move", handler);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <div className={`player-selection ${fadingOut ? "fade-out" : ""}`}>
//       <Canvas camera={{ position: [0, 10, 10], fov: 30 }}>
//         <Suspense fallback={null}>
//           <ambientLight intensity={1.2} />

//           <group rotation={[Math.PI / 2, 0, 0]}>
//             <Player />
//           </group>

//           <OrbitControls makeDefault enablePan={false} target={[0, 0, 0]} />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

// export default PlayerSelection;
