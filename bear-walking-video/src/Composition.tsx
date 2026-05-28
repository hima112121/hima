import React from 'react';
import { useVideoConfig } from 'remotion';
import { Scene } from './Scene';

export const BearWalkingComposition: React.FC = () => {
  const { frame } = useVideoConfig();

  return <Scene frame={frame} />;
};