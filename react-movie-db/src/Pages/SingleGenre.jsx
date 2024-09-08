import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import Error from "../components/common/Error";
import MovieCard from "../components/common/MovieCard";
import FriendsAndFamily from "../components/home/FriendsAndFamily";
import MovieGenreList from "../components/home/MovieGenreList";
import CardSkeleton from "../components/loading/CardSkeleton";
import NewRelease from "../components/singleMovie/NewRelease";
import { useGetMovies } from "../hooks/useGetMovies";

const SingleGenre = () => {
  const [page, setPage] = useState(1);
  const { query } = useParams();
  const { state } = useGetMovies(
    `${
      import.meta.env.VITE_BASE_URL
    }list_movies.json?limit=50&page=${page}&genre=${query}`
  );

  useEffect(() => {
    return () => setPage(1);
  }, []);

  const handlePageClick = (selectedPage) => {
    setPage(selectedPage + 1); // react-paginate uses zero-based indexing
  };

  return (
    <>
      <section className="container mx-auto px-5">
        <div className="flex">
          <h1 className="font-bold text-xl my-3 pb-1 border-b border-primary">
            Genre: <span className="uppercase text-primary">{query}</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            {state.loading ? (
              <CardSkeleton item={50} />
            ) : (
              <div className="flex items-center justify-evenly gap-3 flex-wrap">
                {state?.data?.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
                {state.error && <Error />}
              </div>
            )}

            {/* Pagination */}
            {state.movie_count > 0 && (
              <ReactPaginate
                pageCount={Math.ceil(state.movie_count / 50)} // Assuming 50 movies per page
                pageRangeDisplayed={2} // Number of pages shown in the pagination bar
                marginPagesDisplayed={2} // Number of pages to show on the edges of the pagination
                onPageChange={({ selected }) => handlePageClick(selected)}
                containerClassName="pagination flex flex-wrap gap-2 justify-center mt-10"
                activeClassName="page-active text-white bg-blue-500"
                previousLabel={<GrFormPrevious />}
                nextLabel={<GrFormNext />}
                breakLabel={<span className="gap-2">. . .</span>}
                pageClassName="hover:bg-blue-500 duration-200 border border-primary rounded-full h-8 w-8 flex items-center justify-center"
                previousClassName="hover:bg-blue-500 duration-200 border border-primary rounded-full h-8 w-8 flex items-center justify-center"
                nextClassName="hover:bg-blue-500 duration-200 border border-primary rounded-full h-8 w-8 flex items-center justify-center"
                disabledClassName="text-gray-400 cursor-not-allowed"
              />
            )}
          </div>
          <div className="md:w-1/4 md:h-full md:sticky md:top-0 md:-mt-20 md:pl-10">
            <MovieGenreList />
          </div>
        </div>
      </section>

      <NewRelease />
      <FriendsAndFamily />
    </>
  );
};

export default SingleGenre;
