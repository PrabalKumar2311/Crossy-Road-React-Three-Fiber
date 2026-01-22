import { OrthographicCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function ResponsiveCamera() {
  const { size } = useThree();

  // Portrait = mobile
  const isPortrait = size.height > size.width;

  return (
    <OrthographicCamera
      makeDefault
      up={[0, 0, 10]}
      position={isPortrait ? [400, -1200, 1200] : [100, -300, 250]}
      zoom={isPortrait ? 0.5 : 1}
      near={-5000}
      far={5000}
    />
  );
}
