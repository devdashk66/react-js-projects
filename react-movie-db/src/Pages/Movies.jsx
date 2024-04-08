import DownloadShows from "../components/home/DownloadShows";
import FriendsAndFamily from "../components/home/FriendsAndFamily";
import MoviesList from "../components/home/MoviesList";
import NewRelease from "../components/singleMovie/NewRelease";

const Movies = () => {
  return (
    <div className="container mx-auto">
      <NewRelease />
      <MoviesList genere="romance" />
      <DownloadShows />
      <MoviesList genere="action" />
      <FriendsAndFamily />
      <MoviesList genere="sci-fi" />
    </div>
  );
};

export default Movies;
