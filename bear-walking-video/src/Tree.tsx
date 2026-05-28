import React from 'react';
import * as THREE from 'three';

interface TreeProps {
  position: [number, number, number];
}

export const Tree: React.FC<TreeProps> = ({ position }) => {
  return (
    <group position={position}>
      {/* 幹 */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 3, 8]} />
        <meshStandardMaterial color="#654321" roughness={0.9} />
      </mesh>

      {/* 枝葉（上） */}
      <mesh position={[0, 3.5, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#228B22" roughness={0.8} />
      </mesh>

      {/* 枝葉（中） */}
      <mesh position={[0, 2.8, 0]}>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshStandardMaterial color="#32CD32" roughness={0.8} />
      </mesh>
    </group>
  );
};