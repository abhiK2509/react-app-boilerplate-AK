import React from "react";

const VideoStream = () => {
  return (
    <div className="m-5">
      <iframe
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/4xDzrJKXOOY?si=GC4yRwBjKDaji8Jm"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoStream;
