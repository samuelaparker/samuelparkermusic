import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIO | Samuel Parker",
  description:
    "Samuel Parker (Sam Parker) is a jazz pianist available for hire with over a decade of professional experience.",
};

export default function Bio() {
  return (
    <div className="mx-4 mt-4">
      <Link href="/" className="font-dawning text-4xl">
        Samuel Parker
      </Link>
      <div className="mt-4 sm:mt-8 max-w-3xl sm:text-2xl">
        <p className="mt-2 ">
          From Maine&apos;s serene coast to the busy streets of NYC and now
          adding rhythm to Richmond, VA, Sam Parker&apos;s journey through jazz
          is a fusion of artistry and experience.
        </p>
        <p className="mt-2 ">
          Under the mentorship of Andy LaVerne, ( a student of Bill Evans ), Sam
          refined his craft at the esteemed Hartt School of Music. Sam&apos;s
          piano instantly enhances an event with his knowledge of the American
          songbook and over a decade of experience playing jazz piano at clubs
          and parties.
        </p>
        <p className="mt-2">
          Sam&apos;s forte? Reading the vibe. His music isn&apos;t just
          background noise; it&apos;s an atmosphere enhancer, tailored to the
          energy of each event. His sensitivity and intuition transform
          gatherings into unforgettable experiences, where sophistication meets
          spontaneity.
        </p>
        <p className="mt-2">
          For an event where taste, artistry, and an unbeatable vibe collide,
          invite Sam Parker to curate an experience that lingers.
        </p>
        <p></p>
      </div>
    </div>
  );
}
