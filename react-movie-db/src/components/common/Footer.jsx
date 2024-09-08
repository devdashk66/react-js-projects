import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import scrollToTop from "../../utils/scrollToTop";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow dark:bg-zinc-950 bg-white">
      <div className="flex justify-between items-center sm:flex sm:items-center sm:justify-between px-6 lg:px-12 py-6">
        <Link
          onClick={scrollToTop}
          to="/"
          className="flex items-center  sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MoviesDB
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
      <div className="max-w-screen-2xl mx-auto flex py-5  text-gray-800 dark:text-gray-500 text-sm flex-col items-center border-t   relative">
        <div className="md:flex-auto mt-2 flex-row flex gap-3">
          <a
            href="https://github.com/devdashk66"
            target="_blank"
            className="w-6 mx-1"
          >
            <FaSquareGithub className="text-gray-500 dark:text-white dark:hover:text-primary hover:text-primary w-full h-full dark:hover:bg-white rounded duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/devdashk66"
            target="_blank"
            className="w-6 mx-1"
          >
            <FaLinkedin className="text-gray-500 dark:text-white dark:hover:text-primary hover:text-primary w-full h-full dark:hover:bg-white rounded duration-300" />
          </a>
          <a
            href="https://x.com/devdashk66"
            target="_blank"
            className="w-6 mx-1"
          >
            <FaTwitterSquare className="text-gray-500 dark:text-white dark:hover:text-primary hover:text-primary w-full h-full dark:hover:bg-white rounded duration-300" />
          </a>
          <a
            href="https://www.instagram.com/devdashk_66"
            target="_blank"
            className="w-6 mx-1"
          >
            <FaSquareInstagram className="text-gray-500 dark:text-white dark:hover:text-primary hover:text-primary w-full h-full dark:hover:bg-white rounded duration-300" />
          </a>
          <a
            href="https://www.facebook.com/devdashk66"
            target="_blank"
            className="w-6 mx-1"
          >
            <FaFacebookSquare className="text-gray-500 dark:text-white dark:hover:text-primary hover:text-primary w-full h-full dark:hover:bg-white rounded duration-300 " />
          </a>
        </div>
        <div className="my-5">
          © Copyright 2024. All Rights Reserved by{" "}
          <a
            className="text-primary font-semibold hover:underline duration-300"
            target="_blank"
            href="https://www.linkedin.com/in/devdashk66"
          >
            Dev
          </a>
          .
        </div>
        <p className="text-[10px] absolute bottom-1 right-3">
          Created on 30-03-2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
