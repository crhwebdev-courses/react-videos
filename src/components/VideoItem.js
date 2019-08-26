import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item">
      <img className="ui" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header" onClick={() => onVideoSelect(video)}>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
