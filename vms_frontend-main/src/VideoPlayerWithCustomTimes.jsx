import React, { useState, useEffect } from 'react';
import videojs from 'video.js';

const VideoPlayerWithCustomTimes = ({ startTime, endTime }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (document.getElementById('my-video')) {
      const vjsPlayer = videojs('my-video');
      setPlayer(vjsPlayer);
    }
  }, []);
  

 

  const seekToStartTime = () => {
    if (player && startTime) {
      const startSeconds = convertTimeToSeconds(startTime);
      player.currentTime(startSeconds);
    }
  };

  return (
    <div>
      <video id="my-video" className="video-js" controls preload="auto">
        <source src="http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8" type="application/x-mpegURL" />
      </video>
      <button onClick={seekToStartTime}>Jump to Start Time</button>
    </div>
  );
};

// Helper function to convert "HH:MM" to seconds
const convertTimeToSeconds = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60;
};

export default VideoPlayerWithCustomTimes;
