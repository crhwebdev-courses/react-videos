import React from 'react';

const VideoDetail = ({ video }) => {
  return <div>{video && video.snippet.title}</div>;
};

export default VideoDetail;
