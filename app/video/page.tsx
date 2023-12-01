"use client";
import Link from "next/link";
import React from "react";
import Iframe from "react-iframe";
//https://github.com/tjallingt/react-youtube

export default function Example() {
  // const onPlayerReady: YouTubeProps["onReady"] = (event) => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };

  // const opts: YouTubeProps["opts"] = {
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 0,
  //   },
  // };

  return (
    <div className="mx-4 mt-4">
      <Link href="/" className="font-dawning text-4xl">
        Samuel Parker
      </Link>
      <div className="flex flex-wrap lg:flex-row flex-col pb-20">
        <div className="aspect-w-16 aspect-h-9">
          <Iframe
            url="https://www.youtube.com/embed/WyXFfKYbtQU"
            //https://www.youtube.com/watch?v=fIFMCjsqtN8

            id=""
            className=""
            display="block"
            position="relative"
          />
          {/* <YouTube
            className=""
            videoId="fIFMCjsqtN8"
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <YouTube
            className=""
            videoId="fIFMCjsqtN8"
            opts={opts}
            onReady={onPlayerReady}
          /> */}
        </div>
      </div>
    </div>
  );
}
