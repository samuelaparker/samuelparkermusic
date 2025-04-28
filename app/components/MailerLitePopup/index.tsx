"use client";

import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script
        src="/scripts/ml.js"
        onError={(e: Error) => {
          console.error("Script failed to load", e);
        }}
      />
    </>
  );
}
