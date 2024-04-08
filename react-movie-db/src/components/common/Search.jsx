import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (event.key === "Enter") {
      navigate(`/${query}`);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <input
          onKeyPress={handleSearch}
          onChange={handleChange}
          id="search"
          name="search"
          type="text"
          placeholder="Search..."
          className={`border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 text-white transition-colors focus:outline-none peer bg-inherit w-[180px] md:w-[300px] lg:w-[400px]`}
        />
      </div>
    </div>
  );
};

export default Search;
