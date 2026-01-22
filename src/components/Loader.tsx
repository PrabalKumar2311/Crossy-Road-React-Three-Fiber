import { Html } from "@react-three/drei";

export default function Loader() {

  console.log("suspense")
  return (
    <Html center>
      <h1 style={{ color: "black" }}>CROSSY</h1>
      <h1 style={{ color: "white" }}>ROAD</h1>
    </Html>
  );
}
