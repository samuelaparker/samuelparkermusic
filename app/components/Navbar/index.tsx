import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="border-4 border-indigo-500  text-base sm:text-5xl ">
        <Link
          className="m-4 hover:opacity-80 transition duration-400 ease-in-out"
          href="/bio"
        >
          BIO
        </Link>
        <Link
          className="m-4 hover:opacity-80 transition duration-400 ease-in-out"
          href="/video"
        >
          Video
        </Link>
        <Link
          className="m-4 hover:opacity-80 transition duration-400 ease-in-out"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
