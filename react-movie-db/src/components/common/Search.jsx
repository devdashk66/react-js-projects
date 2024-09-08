import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get("query");

  const [query, setQuery] = useState(queryValue ?? "");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      navigate(`/?query=${debouncedQuery}`);
      setDebouncedQuery("");
    }
  }, [debouncedQuery, navigate, query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (!e.target.value) {
      navigate(`/movies`);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <input
          value={query}
          onChange={handleChange}
          id="search"
          name="search"
          type="text"
          placeholder="Search..."
          className={`border-b border-gray-300 py-1 px-5 focus:border-b-2 text-primary transition-colors focus:outline-none peer bg-inherit w-[180px] md:w-[300px] lg:w-[400px] focus:bg-white focus:rounded-full duration-300 font-bold`}
        />
      </div>
    </div>
  );
};

export default Search;
