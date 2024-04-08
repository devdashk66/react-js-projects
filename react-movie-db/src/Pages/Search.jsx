import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import MovieCard from "../components/common/MovieCard";
import MovieNotFound from "../components/common/MovieNotFound";
import CardSkeleton from "../components/loading/CardSkeleton";
import { useGetMovies } from "../hooks/useGetMovies";

const Search = () => {
  const [page, setPage] = useState(1);
  const { query } = useParams();
  const handlePageClick = (selectedPage) => {
    setPage(selectedPage + 1); // react-paginate uses zero-based indexing
  };

  const { state } = useGetMovies(
    `${
      import.meta.env.VITE_BASE_URL
    }list_movies.json?page=${page}&query_term=${query}`
  );

  useEffect(() => {
    return () => {
      setPage(1);
    };
  }, [query]);

  return (
    <div className="px-12">
      <div className="mb-5 flex">
        <h2 className="text-xl my-3 pb-1 border-b border-blue-600">
          Showing result for:{" "}
          <span className="text-lg uppercase font-bold ">{query}</span>
        </h2>
      </div>

      {state.loading ? (
        <CardSkeleton item={20} />
      ) : (
        <div className="flex items-center justify-evenly gap-3 flex-wrap">
          {state?.data?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          {state?.movie_count === 0 && <MovieNotFound />}
        </div>
      )}

      {/* Pagination */}
      {state?.movie_count > 0 && (
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
