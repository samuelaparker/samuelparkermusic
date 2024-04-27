import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="text-xl sm:text-5xl">
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
      </div>
    </>
  );
};

export default Navbar;
