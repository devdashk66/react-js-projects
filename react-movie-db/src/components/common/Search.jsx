import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setQuery(e.target.value);
    navigate(`/${e.target.value}`);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <input
          onChange={handleSearch}
          id="search"
          name="search"
          type="text"
          className={`border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 ${
            query && "border-blue-700"
          } transition-colors focus:outline-none peer bg-inherit w-[180px] md:w-[300px] lg:w-[400px]`}
        />
        <label
          htmlFor="search"
          className={`absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-600 ${
            query && "-top-4 text-xs text-blue-600"
          }`}
        >
          Search...
        </label>
      </div>
    </div>
  );
};

export default Search;
