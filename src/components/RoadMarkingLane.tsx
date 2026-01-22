// Enhanced RoadMarkingLane.tsx with dashed lines
import { useMemo } from 'react';
import Road from './Road';

type Props = {
  rowIndex: number;
  dashed?: boolean;
};

function RoadMarkingLane({ rowIndex, dashed = true }: Props) {
  // Create dashed line segments
  const dashedLines = useMemo(() => {
    if (!dashed) return null;
    
    const segments = [];
    const segmentLength = 5;
    const gapLength = 3;
    const totalLength = 100;
    let position = -50; // Start at -50
    
    while (position < 50) {
      segments.push(
        <mesh key={position} position={[position + segmentLength/2, 0, 0.1]}>
          <planeGeometry args={[segmentLength, 0.3]} />
          <meshStandardMaterial color="white" />
        </mesh>
      );
      position += segmentLength + gapLength;
    }
    
    return segments;
  }, [dashed]);

  return (
    <Road rowIndex={rowIndex}>
      {/* Road surface */}
      <mesh>
        <planeGeometry args={[100, 10]} />
        <meshStandardMaterial color="#333333" /> {/* Dark gray for road markings lane */}
      </mesh>
      
      {/* Center line - dashed or solid */}
      {dashed ? dashedLines : (
        <mesh position={[0, 0, 0.1]}>
          <planeGeometry args={[100, 0.5]} />
          <meshStandardMaterial color="white" />
        </mesh>
      )}
      
      {/* Optional: Add small triangles or arrows for direction */}
      <mesh position={[40, 0, 0.1]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.5, 2, 3]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* Side barriers or curbs */}
      <mesh position={[-50, -5, 0.2]}>
        <boxGeometry args={[0.5, 0.8, 0.5]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      <mesh position={[50, -5, 0.2]}>
        <boxGeometry args={[0.5, 0.8, 0.5]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
    </Road>
  );
}

export default RoadMarkingLane;