import { Link } from "react-router-dom";
import Search from "./Search";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  return (
    <nav className=" border-gray-200 py-2 relative z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex gap-2 items-center">
          <span className="self-center text-lg lg:text-xl xl:text-2xl font-semibold whitespace-nowrap text-primary">
            MoviesDB
          </span>
        </Link>

        <div className="flex gap-1 md:gap-3 lg:gap-5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center justify-center">
          <Search />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
