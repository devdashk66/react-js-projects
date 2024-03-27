import { Carousel } from "keep-react";
import { useGetMovies } from "../../hooks/useGetMovies";
import Error from "../common/Error";

export const Hero = () => {
  const { state } = useGetMovies("https://yts.mx/api/v2/list_movies.json");

  if (state.error) {
    return <Error error="Somthing went wrong" />;
  }

  return (
    <Carousel slideInterval={5000} showControls={true}>
      {state?.data?.map((movie) => (
        <div
          key={movie.id}
          style={{
            backgroundImage: `url(${movie.large_cover_image})`,
          }}
          className="bg-center bg-cover relative"
        >
          <div className="relative w-full h-full inset-0 bg-[#27427ca4] flex flex-col items-center justify-center">
            <div className="lg:absolute lg:bottom-10  lg:left-36 xl:left-56  flex flex-col gap-3 text-white bg-slate-400 p-5 rounded-md w-2/4 bg-opacity-20 items-center lg:justify-start lg:items-start justify-center text-center">
              <h1 className="text-xl lg:text-4xl font-bold">{movie.title}</h1>
              <p>
                Rating : <span className="text-blue-600">{movie.rating}</span>{" "}
                Runtime :{" "}
                <span className="text-blue-600">{movie.runtime}m</span>
              </p>
              <p>
                Year <span>{movie.year}</span>
              </p>
              <p>
                <a
                  href="#"
                  className="btn-watch-now inline-block bg-blue-600 border-2 border-blue-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-transparent"
                >
                  Watch now
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
