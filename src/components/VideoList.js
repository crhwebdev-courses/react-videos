import React from 'react';
import { tsPropertySignature } from '@babel/types';

const VideoList = ({ videos }) => {
  return <div>{videos.length}</div>;
};

export default VideoList;
