import React, { useState, useEffect, useRef, useCallback } from "react";
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import "./VideoAreaSection.css";

const VideoAreaSection = ({ streamUrl, heightValue = "84vh" }) => {
  const videoContainerRef = useRef(null);
  const playerRef = useRef(null);

  const initializePlayer = useCallback((url) => {
    // Clear previous player if exists
    if (playerRef.current) {
      playerRef.current.dispose();
    }

    // Clear existing video elements
    if (videoContainerRef.current) {
      videoContainerRef.current.innerHTML = '';
    }

    // Create new video element
    const videoElement = document.createElement('video');
    videoElement.classList.add('video-js', 'v1');
    videoElement.style.height = heightValue; // Set height dynamically
    videoContainerRef.current.appendChild(videoElement);

    // Initialize new player
    const player = videojs(videoElement, {
      controls: true,
      autoplay: true,
      preload: 'auto',
      sources: [{
        src: url,
        type: 'application/x-mpegURL'
      }]
    });
    
    // Handle fullscreen changes
    player.on("fullscreenchange", () => {
      if (player.isFullscreen()) {
        videoElement.style.height = "100vh"; // Fullscreen height
      } else {
        videoElement.style.height = heightValue; // Reset to default height
      }
    });

    playerRef.current = player;
  }, [heightValue]);

  useEffect(() => {
    if (streamUrl) {
      initializePlayer(streamUrl);
    }

    // Cleanup function
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [streamUrl, initializePlayer]);

  return (
    <div className="video-area-section">
      
      <div className="video-container">
        <div 
          ref={videoContainerRef} 
          className="video-container2"
         
        >
          {!streamUrl && <p>No stream selected</p>}
        </div>
      </div>
    </div>
  );
};

export default VideoAreaSection;