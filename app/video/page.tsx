import Link from "next/link";
import type { Metadata } from "next";
import VideoEmbed from "../components/VideoEmbed";

export const metadata: Metadata = {
  title: "VIDEO | Samuel Parker - Videos of Sam Parker playing jazz piano.",
  description: "Videos of Samuel Parker playing jazz piano.",
};

export default function Video() {
  return (
    <>
      <div className="mx-4 mt-4">
        <Link href="/" className="font-dawning text-4xl">
          Samuel Parker
        </Link>
        <VideoEmbed />
      </div>
    </>
  );
}
