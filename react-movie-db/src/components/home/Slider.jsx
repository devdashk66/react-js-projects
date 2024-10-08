/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Slider = ({ movie }) => {
  return (
    <div
      key={movie.id}
      style={{
        backgroundImage: `url(${movie.large_cover_image})`,
      }}
      className="bg-center bg-cover relative"
    >
      <div className="relative w-full h-[500px] lg:h-[700px] inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-primary/40 to-black">
        <div className="text-gray-100 lg:absolute lg:bottom-28  lg:left-36 xl:left-56  flex flex-col gap-3  bg-slate-400 px-5 py-8 rounded-md w-3/4 lg:w-2/4 bg-opacity-20 items-center lg:justify-start lg:items-start justify-center text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="text-white">
            Rating : <span className="text-primary">{movie.rating}</span>{" "}
            Runtime : <span className="text-primary">{movie.runtime}m</span>
          </p>
          <p className="text-white opacity-80">
            Year <span>{movie.year}</span>
          </p>
          <p>
            <Link
              to={`/movies/${movie.id}`}
              href="#"
              className="btn-watch-now inline-block bg-primary border-2 border-primary text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-transparent"
            >
              View Details &rarr;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
