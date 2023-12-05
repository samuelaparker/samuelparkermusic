"use client";
import Iframe from "react-iframe";

//https://github.com/tjallingt/react-youtube

export default function VideoEmbed() {
  return (
    <div className="">
      <div className="sm:h-[350px h-[250px] max-w-[600px] py-4">
        <Iframe
          url="https://www.youtube.com/embed/6y5i9zwnx0A"
          title="Autumn Leaves - Samuel (Sam) Parker - November 2023"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
        ></Iframe>
      </div>
      <div className="sm:h-[350px] h-[250px] max-w-[600px] py-4">
        <Iframe
          url="https://www.youtube.com/embed/26CmDp1ZSHI"
          title="But Beautiful - Samuel (Sam) Parker - November 2023"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
        ></Iframe>
      </div>
    </div>
  );
}
