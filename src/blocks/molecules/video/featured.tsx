"use client";

import React from "react";
import ReactPlayer from "react-player";

export default function Featured_Video() {
  return (
    <ReactPlayer
      className="react-player"
      controls
      url="kns-video.mov"
      width="100%"
      height="100%"
      style={{
        border: "none",
      }}
    />
  );
}
