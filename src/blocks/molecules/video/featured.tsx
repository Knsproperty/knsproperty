"use client";

import React from "react";
import ReactPlayer from "react-player";

export default function Featured_Video() {
  return (
    <video controls className="md:max-w-[600px] mx-auto mb-5">
      <source src="kns-video.mov" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
