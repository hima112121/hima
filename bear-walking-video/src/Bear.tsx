import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';

interface BearProps {
  position: [number, number, number];
  frame: number;
}

export const Bear: React.FC<BearProps> = ({ position, frame }) => {
  const bearGroupRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!bearGroupRef.current) return;

    // クマの位置を更新（左から右へ歩く）
    const walkProgress = frame / 900; // 30秒 = 900フレーム (30fps)
    bearGroupRef.current.position.x = -8 + walkProgress * 16;

    // 体の上下動（歩く時のバウンス）
    const bounceAmount = Math.sin(frame * 0.05) * 0.1;
    bearGroupRef.current.position.y = 0 + bounceAmount;

    // 左腕の回転（歩行アニメーション）
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(frame * 0.06) * 0.6;
    }

    // 右腕の回転（左腕と逆位相）
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = Math.sin(frame * 0.06 + Math.PI) * 0.6;
    }

    // 左足の回転
    if (leftLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(frame * 0.06) * 0.5;
    }

    // 右足の回転
    if (rightLegRef.current) {
      rightLegRef.current.rotation.x = Math.sin(frame * 0.06 + Math.PI) * 0.5;
    }

    // 25フレーム目以降、クマが振り返って手を振る
    if (frame > 750) {
      const waveFrame = frame - 750;
      bearGroupRef.current.rotation.y = Math.sin(waveFrame * 0.05) * 0.2;
      
      // 右手を振る
      if (rightArmRef.current) {
        rightArmRef.current.rotation.z = Math.sin(waveFrame * 0.15) * 0.8;
      }
    }
  });

  return (
    <group ref={bearGroupRef} position={position}>
      {/* 胴体 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.6, 1.2, 0.6]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* 頭 */}
      <mesh position={[0, 1.0, 0.2]}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* 左耳 */}
      <mesh position={[-0.4, 1.65, 0.2]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* 右耳 */}
      <mesh position={[0.4, 1.65, 0.2]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* 左目 */}
      <mesh position={[-0.2, 1.1, 0.85]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* 右目 */}
      <mesh position={[0.2, 1.1, 0.85]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* 鼻 */}
      <mesh position={[0, 0.7, 0.9]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* 口（ベージュ） */}
      <mesh position={[0, 0.5, 0.85]}>
        <boxGeometry args={[0.2, 0.15, 0.1]} />
        <meshStandardMaterial color="#D2B48C" />
      </mesh>

      {/* 左腕 */}
      <group ref={leftArmRef} position={[-0.5, 0.3, 0]}>
        <mesh>
          <boxGeometry args={[0.2, 0.7, 0.2]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        {/* 左手 */}
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      </group>

      {/* 右腕 */}
      <group ref={rightArmRef} position={[0.5, 0.3, 0]}>
        <mesh>
          <boxGeometry args={[0.2, 0.7, 0.2]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        {/* 右手 */}
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      </group>

      {/* 左足 */}
      <group ref={leftLegRef} position={[-0.25, -0.7, 0]}>
        <mesh>
          <boxGeometry args={[0.2, 0.6, 0.2]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        {/* 左足の先 */}
        <mesh position={[0, -0.45, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      </group>

      {/* 右足 */}
      <group ref={rightLegRef} position={[0.25, -0.7, 0]}>
        <mesh>
          <boxGeometry args={[0.2, 0.6, 0.2]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        {/* 右足の先 */}
        <mesh position={[0, -0.45, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      </group>
    </group>
  );
};
