import { FaSun } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import Search from "./Search";

const NavBar = () => {
  console.log("rrr");
  return (
    <nav className=" border-gray-200  py-2 absolute z-20 top-0 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex gap-2 items-center">
          <img src={Logo} className="h-7 lg:h-8 xl:h-9" alt="Movie DB Logo" />
          <span className="self-center text-lg lg:text-xl xl:text-2xl font-semibold whitespace-nowrap dark:text-white">
            Movies DB
          </span>
        </div>

        <div className="flex gap-1 md:gap-3 lg:gap-5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center justify-center">
          <Search />
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium p-2 w-8 h-8 text-center rounded-full"
          >
            <FaSun />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
