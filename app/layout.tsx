import type { Metadata } from "next";
import { Rubik_Mono_One, Koulen, Dawning_of_a_New_Day } from "next/font/google";
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
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
      <body>{children}</body>
    </html>
  );
}
