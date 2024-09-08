/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useGetMovies } from "../../hooks/useGetMovies";
import Error from "../common/Error";
import MovieCard from "../common/MovieCard";
import CardSkeleton from "../loading/CardSkeleton";

const MoviesList = ({ genere }) => {
  const { state } = useGetMovies(
    `${import.meta.env.VITE_BASE_URL}list_movies.json?genre=${genere}`
  );
  return (
    <section className="mt-5 mx-5">
      <div className="flex items-center justify-between py-3 text-xl">
        <h2 className="font-bold text-xl my-3 pb-1 border-b border-primary">
          Genere: <span className="uppercase text-primary">{genere}</span>
        </h2>
        <Link
          to={`/genre/${genere}`}
          className="bg-primary text-xs px-2 py-1 rounded-sm hover:text-primary hover:bg-transparent hover:border-primary hover:border duration-200 border border-transparent text-white"
        >
          View all
        </Link>
      </div>

      {state.loading && <CardSkeleton item={6} />}
      <div className="flex items-start justify-center gap-3 flex-wrap">
        {state?.data?.slice(0, 6).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {state.error && <Error />}
      </div>
    </section>
  );
};

export default MoviesList;
