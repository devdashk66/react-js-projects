import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import Error from "../components/common/Error";
import MovieCard from "../components/common/MovieCard";
import useDebounce from "../hooks/useDebounce";
import { useGetMovies } from "../hooks/useGetMovies";

const Search = () => {
  const [page, setPage] = useState(1);
  const { query } = useParams();
  const handlePageClick = (selectedPage) => {
    setPage(selectedPage + 1); // react-paginate uses zero-based indexing
  };
  const debouncedValue = useDebounce(query, 1000);

  const { state } = useGetMovies(
    `${
      import.meta.env.VITE_BASE_URL
    }list_movies.json?page=${page}&query_term=${debouncedValue}`
  );

  useEffect(() => {
    return () => {
      setPage(1);
    };
  }, [debouncedValue]);

  if (state.loading) {
    return <Error error="loading..." />;
  }
  return (
    <div className="px-12">
      <h1 className="mb-5">
        Showing result for: <span className="text-lg uppercase">{query}</span>
      </h1>

      <div className="flex items-center justify-evenly gap-3 flex-wrap">
        {state?.data?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Pagination */}
      {state && (
        <ReactPaginate
          pageCount={Math.ceil(state.movie_count / 20)} // Assuming 50 movies per page
          pageRangeDisplayed={2} // Number of pages shown in the pagination bar
          marginPagesDisplayed={2} // Number of pages to show on the edges of the pagination
          onPageChange={({ selected }) => handlePageClick(selected)}
          containerClassName="pagination flex flex-wrap gap-2 justify-center mt-10"
          activeClassName="page-active bg-blue-500"
          previousLabel={<GrFormPrevious />}
          nextLabel={<GrFormNext />}
          breakLabel={<span className="gap-2">. . .</span>}
          pageClassName="hover:bg-blue-500 duration-200 border border-blue-600 rounded-full h-8 w-8 flex items-center justify-center"
          previousClassName="hover:bg-blue-500 duration-200 border border-blue-600 rounded-full h-8 w-8 flex items-center justify-center"
          nextClassName="hover:bg-blue-500 duration-200 border border-blue-600 rounded-full h-8 w-8 flex items-center justify-center"
          disabledClassName="text-gray-400 cursor-not-allowed"
        />
      )}
    </div>
  );
};

export default Search;
