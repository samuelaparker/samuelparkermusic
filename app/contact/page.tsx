import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="mx-4 mt-4">
      <Link href="/" className="font-dawning text-4xl">
        Samuel Parker
      </Link>
      <div className="mt-4 sm:mt-8 max-w-3xl sm:text-2xl">
        <p className="mt-2 ">For all inquiries please fill out form below.</p>
        <ContactForm />
      </div>
    </div>
  );
}
