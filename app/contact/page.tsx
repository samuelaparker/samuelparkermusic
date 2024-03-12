import Link from "next/link";
import ContactForm from "../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CONTACT | Jazz Piano - Contact Sam Parker for Jazz Piano for wedding cocktail hours, events, parties and more.",
  description: "Fill out the contact form to get in touch with Samuel Parker.",
};

export default function Contact() {
  return (
    <div className="mx-4 mt-4">
      <div className="w-full text-center">
        <Link href="/" className="font-dawning text-4xl">
          Samuel Parker
        </Link>
      </div>
      <div className="flex flex-col min-h-[50svh] justify-center mx-auto sm:mt-8 max-w-3xl sm:text-4xl text-2xl">
        <p className="mt-2 ">For all inquiries please fill out form below.</p>
        <div className="mt-4 text-base sm:text-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
