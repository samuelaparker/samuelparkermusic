import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samuel Parker | Jazz Piano",
  description:
    "Samuel Parker (Sam Parker) is a jazz pianist available for hire. He is currently based out of Richmond, VA. He plays wedding cocktail hours, background music for events and parties and accompaniment for musicians and vocalists.",
};

export default function Home() {
  return (
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
  );
}
