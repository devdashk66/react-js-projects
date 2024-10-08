/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import scrollToTop from "../../utils/scrollToTop";

const MovieCard = ({ movie }) => {
  return (
    <Link
      onClick={scrollToTop}
      to={`/movies/${movie.id}`}
      className="flex flex-col flex-1 min-w-28 max-w-60 md:min-w-48 shadow-sm shadow-gray-400 group rounded"
    >
      <div className="w-full min-h-44 lg:min-h-80 lg:max-h-80 overflow-hidden bg-cover bg-gray-700 relative rounded">
        <img
          className="object-cover w-full min-h-44 lg:min-h-80 lg:max-h-80 group-hover:scale-110 duration-300"
          src={movie.large_cover_image ?? movie.medium_cover_image}
          alt={movie.title}
          loading="lazy"
        />
        <span className="text-[10px] absolute bottom-1 text-white right-0 bg-primary bg-opacity-50 px-1">
          {movie.runtime} min
        </span>
      </div>
      <div className="w-full mt-1 pb-1 px-1">
        <h3 className="pb-1 text-sm md:text-base xl:text-lg font-bold lg:text-xl truncate">
          {movie.title}
        </h3>
        <div className="flex justify-between text-gray-300 text-sm">
          <span className="text-primary text-[10px] lg:text-sm">
            {movie.year}
          </span>
          <span className="flex items-center  gap-1 text-primary text-[10px] lg:text-sm">
            <FaRegStar /> {movie.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
