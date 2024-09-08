import { Link } from "react-router-dom";
import movieGenres from "../../data/movieGenres";
import scrollToTop from "../../utils/scrollToTop";

const MovieGenreList = () => {
  return (
    <section className="mt-5 mx-5">
      <div className="flex">
        <h1 className="font-bold text-xl my-3 pb-1 border-b border-primary">
          Movie Genres
        </h1>
      </div>

      <div className="flex lg:flex-col flex-wrap justify-center gap-3 lg:gap-0 overflow-hidden">
        {movieGenres.map((genre) => (
          <h1 onClick={scrollToTop} key={genre.id}>
            <Link
              to={`/genre/${genre.name}`}
              className="hover:text-primary duration-200 inline lg:hover:ml-2 text-sm lg:hover:scale-125 origin-left"
            >
              {genre.name}
            </Link>
          </h1>
        ))}
      </div>
    </section>
  );
};

export default MovieGenreList;
