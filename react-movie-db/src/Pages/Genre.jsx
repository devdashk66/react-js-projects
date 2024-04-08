import DownloadShows from "../components/home/DownloadShows";
import FriendsAndFamily from "../components/home/FriendsAndFamily";
import MovieGenreList from "../components/home/MovieGenreList";
import MoviesList from "../components/home/MoviesList";
import NewRelease from "../components/singleMovie/NewRelease";

const Genre = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-5">
        <div className="lg:w-3/4">
          <NewRelease />
        </div>
        <div className="lg:w-1/4">
          <MovieGenreList />
        </div>
      </div>
      <MoviesList genere="action" />
      <DownloadShows />
      <MoviesList genere="romance" />
      <MoviesList genere="thriller" />
      <FriendsAndFamily />
      <MoviesList genere="animation" />
      <MoviesList genere="Western" />
      <MoviesList genere="comedy" />
      <MoviesList genere="horror" />
    </section>
  );
};

export default Genre;
