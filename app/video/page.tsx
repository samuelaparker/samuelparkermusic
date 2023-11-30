"use client";
import Link from "next/link";
import React from "react";
//https://github.com/tjallingt/react-youtube
import YouTube, { YouTubeProps } from "react-youtube";

export default function Example() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="mx-4 mt-4">
      <Link href="/" className="font-dawning text-4xl">
        Samuel Parker
      </Link>
      <div className="flex flex-wrap">
        <div className="pt-8 pr-8">
          <YouTube
            className="max-h-[100px]aspect-video"
            videoId="fIFMCjsqtN8"
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
        <div className="pt-8">
          <YouTube
            className="max-h-[100px]aspect-video"
            videoId="fIFMCjsqtN8"
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
      </div>
    </div>
  );
}
