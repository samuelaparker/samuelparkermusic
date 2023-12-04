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

  //add https://www.youtube.com/embed/6y5i9zwnx0A

  return (
    <div className="mx-4 mt-4">
      <Link href="/" className="font-dawning text-4xl">
        Samuel Parker
      </Link>
      <div className="">
        <div className="h-[400px] max-w-[800px] py-4">
          <Iframe
            url="https://www.youtube.com/embed/6y5i9zwnx0A"
            title="Mandolin Orange - Wildfire - 11/2/2016 - Paste Studios, New York, NY"
            className="w-full h-full"
          ></Iframe>
        </div>
        <div className="h-[400px] max-w-[800px] py-4">
          <Iframe
            url="https://www.youtube.com/embed/6y5i9zwnx0A"
            title="Mandolin Orange - Wildfire - 11/2/2016 - Paste Studios, New York, NY"
            className="w-full h-full"
          ></Iframe>
        </div>
      </div>
    </div>
  );
}
