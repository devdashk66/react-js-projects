/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import scrollToTop from "../../utils/scrollToTop";

const MovieCard = ({ movie }) => {
  return (
    <Link
      onClick={scrollToTop}
      to={`/movies/${movie.id}`}
      className="flex flex-col flex-1 min-w-28 max-w-60 md:min-w-48 shadow-sm shadow-gray-400"
    >
      <div className="w-full min-h-44 lg:min-h-80 lg:max-h-80 overflow-hidden bg-cover bg-gray-700 relative">
        <img
          className="object-cover w-full h-full"
          src={movie.large_cover_image ?? movie.medium_cover_image}
          alt={movie.title}
          loading="lazy"
        />
        <span className="text-[10px] absolute bottom-1 right-0 bg-blue-600 bg-opacity-50 px-1">
          {movie.runtime} min
        </span>
      </div>
      <div className="w-full mt-1 pb-1 px-1">
        <h3 className="pb-1 text-lg font-bold lg:text-xl truncate">
          {movie.title}
        </h3>
        <div className="flex justify-between text-gray-300 text-sm">
          <span className="text-blue-500">{movie.year}</span>
          <span className="flex items-center  gap-1 text-blue-500">
            <FaRegStar /> {movie.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
