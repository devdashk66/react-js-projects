import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Error from "../components/common/Error";
import DownloadShows from "../components/home/DownloadShows";
import MovieGenreList from "../components/home/MovieGenreList";
import Loading from "../components/loading/Loading";
import NewRelease from "../components/singleMovie/NewRelease";
import Suggestions from "../components/singleMovie/Suggestions";
import { useGetMovies } from "../hooks/useGetMovies";

const SingleMovie = () => {
  const { id } = useParams();
  const { state } = useGetMovies(
    `${import.meta.env.VITE_BASE_URL}movie_details.json?movie_id=${id}`
  );

  if (state.data.id === 0) {
    return <Error />;
  }
  return (
    <section className="-mt-24">
      {state.loading ? (
        <Loading />
      ) : (
        <>
          {state.error ? (
            <Error />
          ) : (
            <div
              style={{
                backgroundImage: `url(${state?.data?.background_image_original})`,
              }}
              className="bg-cover bg-center"
            >
              <div className="text-gray-100 pt-28 bg-gradient-to-t from-[#0c183b8c]  to-[#0c183b8c] w-full h-full flex flex-col gap-5 pb-10 lg:flex-row lg:items-center lg:justify-center">
                <div className="w-full flex justify-center  px-5 lg:w-2/4 xl:w-1/4">
                  <img
                    className="w-80 lg:w-96 rounded shadow-xl"
                    src={state?.data?.large_cover_image}
                    alt={state?.data?.title}
                  />
                </div>

                <div className="px-5 flex flex-col gap-4 lg:w-2/4">
                  <h1 className="text-4xl font-bold">{state?.data?.title}</h1>

                  <div>
                    {state?.data?.genres?.map((genre) => (
                      <span key={genre}>
                        <Link
                          className="duration-200 hover:text-primary"
                          to={`/genre/${genre.toLowerCase()}`}
                        >
                          {genre}
                        </Link>{" "}
                        |{" "}
                      </span>
                    ))}
                  </div>

                  <div className="flex  justify-evenly lg:justify-start lg:gap-12 items-center">
                    <span className="flex items-center gap-2">
                      <FaRegCalendarAlt className="text-primary" />{" "}
                      {state?.data?.year}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaRegClock className="text-primary" />{" "}
                      {state?.data?.runtime}
                    </span>
                    <span className="flex items-center gap-2">
                      <IoIosStar className="text-primary" />{" "}
                      {state?.data?.rating}
                    </span>
                  </div>

                  <h1 className="text-gray-300">
                    {state?.data?.description_full}
                  </h1>

                  <div className="mt-3">
                    {state?.data?.torrents?.slice(0, 1)?.map((item) => (
                      <a
                        className="uppercase px-7 py-3  bg-primary inline rounded text-center border border-transparent hover:border-primary hover:bg-transparent duration-300"
                        key={item.hash}
                        target="_blank"
                        href={item.url}
                      >
                        Download
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-3/4">
          <Suggestions id={id} />
        </div>
        <div className="lg:w-1/4">
          <MovieGenreList />
        </div>
      </div>

      <NewRelease />
      <DownloadShows />
    </section>
  );
};

export default SingleMovie;
