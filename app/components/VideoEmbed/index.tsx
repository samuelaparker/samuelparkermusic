"use client";
import Iframe from "react-iframe";

//https://github.com/tjallingt/react-youtube

export default function VideoEmbed() {
  return (
    <div className="">
      <div className="sm:h-[350px] h-[250px] sm:min-w-[600px] py-4">
        <Iframe
          url="https://www.youtube.com/embed/hLYPd4txwZc"
          title="Monk's Dream Excerpt - Samuel (Sam) Parker - August 2024"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
        ></Iframe>
      </div>
    </div>
  );
}
