import React from 'react';
import VideoItem from './VideoItem';

const showVideos = videos => {
  return videos.map(video => (
    <VideoItem key={video.id.videoId} video={video} />
  ));
};

const VideoList = ({ videos }) => {
  console.log(videos);
  return <div>{showVideos(videos)}</div>;
};

export default VideoList;
