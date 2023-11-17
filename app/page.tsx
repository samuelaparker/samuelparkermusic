import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-indigo-500 ">
      <div>default font</div>
      <div className="font-koulen text-blue-600 ">Koulen : sans</div>
      <div className="font-dawning">Dawning of a New Day : display</div>
      <div className="font-rubik">Rubik Mono One : mono</div>
    </main>
  );
}
