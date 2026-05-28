import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Bear } from './Bear';
import { Tree } from './Tree';

interface SceneProps {
  frame: number;
}

export const Scene: React.FC<SceneProps> = ({ frame }) => {
  return (
    <Canvas
      camera={{
        position: [0, 2, 5],
        fov: 50,
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {/* 照明 */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 3, 0]} intensity={0.3} />

      {/* 背景（空） */}
      <mesh position={[0, 5, -10]}>
        <planeGeometry args={[20, 12]} />
        <meshStandardMaterial color="#87CEEB" roughness={1} metalness={0} />
      </mesh>

      {/* 地面（草原） */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#00AA00" roughness={0.9} metalness={0} />
      </mesh>

      {/* 木を配置 */}
      <Tree position={[-6, -1.5, -3]} />
      <Tree position={[6, -1.5, -4]} />
      <Tree position={[-3, -1.5, -5]} />

      {/* クマ */}
      <Bear position={[0, 0, 0]} frame={frame} />
    </Canvas>
  );
};