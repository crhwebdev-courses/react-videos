import React from 'react';
import VideoItem from './VideoItem';

const showVideos = (videos, onVideoSelect) => {
  return videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));
};

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="ui relaxed divided list">
      {showVideos(videos, onVideoSelect)}
    </div>
  );
};

export default VideoList;
