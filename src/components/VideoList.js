import React from 'react';
import { tsPropertySignature } from '@babel/types';

const VideoList = props => {
  return <div>{props.videos.length}</div>;
};

export default VideoList;
