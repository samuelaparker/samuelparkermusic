import type { Metadata } from "next";
import { Rubik_Mono_One, Koulen, Dawning_of_a_New_Day } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import MailerLitePopup from "./components/MailerLitePopup";

const dawning = Dawning_of_a_New_Day({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dawning",
});

const rubik_mono = Rubik_Mono_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

const koulen = Koulen({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-koulen",
});

export const metadata: Metadata = {
  title: "Samuel Parker Music | Jazz Piano | Richmond, VA",
  description: "Samuel Parker Music | Jazz Piano | Richmond, VA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dawning.variable} ${rubik_mono.variable} ${koulen.variable}`}
    >
      <body className="min-h-[100svh] bg-mobile sm:bg-desktop bg-cover bg-no-repeat text-[#E4E4E4] overflow-hidden ">
        <div className=" flex flex-col items-center min-h-[100svh] container mx-auto relative pt-4">
          {children}

          <div className="absolute bottom-0">
            <div className="my-8">
              <Navbar />
            </div>
          </div>
        </div>
      </body>
      <script async src="/scripts/ml.js" />
    </html>
  );
}
