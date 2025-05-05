import Link from "next/link";
import Instagram from "../Instagram";

const Navbar = () => {
  return (
    <>
      <div className="text-xl sm:text-5xl flex items-center">
        <Link
          className="m-4 hover:opacity-80 transition duration-300 ease-in-out"
          href="/bio"
        >
          BIO
        </Link>
        <Link
          className="m-4 hover:opacity-80 transition duration-300 ease-in-out"
          href="/video"
        >
          Video
        </Link>
        <Link
          className="m-4 hover:opacity-80 transition duration-300 ease-in-out"
          href="/contact"
        >
          Contact
        </Link>
        <a
          className="m-4 hover:opacity-80 transition duration-300 ease-in-out"
          href="https://www.paypal.com/ncp/payment/TKUEZDLU9WTV6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </a>
        <a
          className="m-4 text-white hover:text-gray-200 transition duration-300 ease-in-out"
          href="https://www.instagram.com/samuel_a_parker/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-block w-6 h-6 sm:w-10 sm:h-10 fill-current">
            <Instagram />
          </span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
