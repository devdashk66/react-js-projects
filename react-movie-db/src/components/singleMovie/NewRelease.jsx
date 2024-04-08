import { useGetMovies } from "../../hooks/useGetMovies";
import Error from "../common/Error";
import MovieCard from "../common/MovieCard";
import CardSkeleton from "../loading/CardSkeleton";

const NewRelease = () => {
  const { state } = useGetMovies(
    `${
      import.meta.env.VITE_BASE_URL
    }list_movies.json?sort_by=year&order_by=desc`
  );
  return (
    <div className="mt-5 mx-5">
      <div className="flex">
        <h2 className="font-bold text-xl my-3 pb-1 border-b border-blue-600">
          New Releases
        </h2>
      </div>
      {state.loading && <CardSkeleton item={12} />}
      <div className="flex items-start justify-center gap-3 flex-wrap">
        {state?.data?.slice(0, 12).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {state.error && <Error />}
      </div>
    </div>
  );
};

export default NewRelease;
