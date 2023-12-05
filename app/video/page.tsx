"use client";
import Link from "next/link";
import React from "react";
import Iframe from "react-iframe";
import Head from "next/head";

//https://github.com/tjallingt/react-youtube

export default function Video() {
  return (
    <>
      <Head>
        <title>
          VIDEO | Samuel Parker - Videos of Sam Parker playing jazz piano.
        </title>
        <meta
          property="og:title"
          content="Videos of Samuel Parker playing jazz piano"
          key="video"
        />
      </Head>
      <div className="mx-4 mt-4">
        <Link href="/" className="font-dawning text-4xl">
          Samuel Parker
        </Link>
        <div className="">
          <div className="h-[350px] max-w-[600px] py-4">
            <Iframe
              url="https://www.youtube.com/embed/6y5i9zwnx0A"
              title="Autumn Leaves - Samuel (Sam) Parker - November 2023"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
            ></Iframe>
          </div>
          <div className="h-[350px] max-w-[600px] py-4">
            <Iframe
              url="https://www.youtube.com/embed/26CmDp1ZSHI"
              title="But Beautiful - Samuel (Sam) Parker - November 2023"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
            ></Iframe>
          </div>
        </div>
      </div>
    </>
  );
}
