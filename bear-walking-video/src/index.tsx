import React from 'react';
import { Composition } from 'remotion';
import { BearWalkingComposition } from './Composition';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="BearWalking"
      component={BearWalkingComposition}
      durationInFrames={900}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};