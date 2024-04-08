import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import scrollToTop from "../../utils/scrollToTop";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow dark:bg-gray-900 mt-20">
      <div className="w-full mx-auto p-4 md:py-8 ">
        <div className="flex justify-between items-center sm:flex sm:items-center sm:justify-between">
          <Link
            onClick={scrollToTop}
            to="/"
            className="flex items-center  sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Movie db Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Movie DB
            </span>
          </Link>
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                onClick={scrollToTop}
                to="/"
                className="hover:underline me-4 md:me-6"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={scrollToTop}
                to="/movies"
                className="hover:underline me-4 md:me-6"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                onClick={scrollToTop}
                to="/genres"
                className="hover:underline me-4 md:me-6"
              >
                Genres
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 30-3-2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Movie DB
          </a>
          . All Rights Reserved by{" "}
          <a
            className="text-blue-600 font-bold hover:text-blue-500"
            target="_blank"
            href="https://github.com/devdashk66"
          >
            Dev
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
