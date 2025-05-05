import Link from "next/link";
import type { Metadata } from "next";
import MailerLitePopup from "./components/MailerLitePopup";

export const metadata: Metadata = {
  title: "Samuel Parker | Jazz Piano - Richmond, VA",
  description:
    "Samuel Parker (Sam Parker) is a jazz pianist available for hire. He is currently based out of Richmond, VA. He plays wedding cocktail hours, background music for events and parties and accompaniment for musicians and vocalists.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samuelparkermusic.com/",
    title: "Samuel Parker - Jazz Piano | Richmond, VA",
    description:
      "Samuel Parker (Sam Parker) is a jazz pianist available for hire. He is currently based out of Richmond, VA. He plays wedding cocktail hours, background music for events and parties and accompaniment for musicians and vocalists.",

    images: [
      {
        url: "https://samuelparkermusic.com//opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Samuel Parker | Jazz Piano - Richmond, VA",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="mx-4 mt-4">
        <div>
          <div className="font-dawning md:text-9xl text-6xl text-center sm:pt-[15%] pt-[40%]">
            Samuel Parker
          </div>
        </div>
        <div className="font-rubik md:text-5xl text-xl text-center mt-12">
          JAZZ PIANO
        </div>
      </div>
    </>
  );
}
