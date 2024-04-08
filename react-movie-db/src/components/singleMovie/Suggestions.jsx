/* eslint-disable react/prop-types */
import { useGetMovies } from "../../hooks/useGetMovies";
import Error from "../common/Error";
import MovieCard from "../common/MovieCard";
import CardSkeleton from "../loading/CardSkeleton";

const Suggestions = ({ id }) => {
  const { state } = useGetMovies(
    `${import.meta.env.VITE_BASE_URL}movie_suggestions.json?movie_id=${id}`
  );

  return (
    <div className="mt-5 mx-5">
      <div className="flex">
        <h2 className="font-bold text-xl my-3 pb-1 border-b border-blue-600">
          Best Similar Movies
        </h2>
      </div>
      {state.loading ? (
        <CardSkeleton item={4} />
      ) : (
        <div className="flex items-start justify-center gap-3 flex-wrap">
          {state?.data?.map((movie) => {
            if (movie.id === 0) {
              return <Error key={movie.id} />;
            }
            return <MovieCard key={movie.id} movie={movie} />;
          })}
          {state.error && <Error />}
        </div>
      )}
    </div>
  );
};

export default Suggestions;
