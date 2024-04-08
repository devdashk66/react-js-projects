import DownloadShows from "../components/home/DownloadShows";
import FriendsAndFamily from "../components/home/FriendsAndFamily";
import Hero from "../components/home/Hero";
import MoviesList from "../components/home/MoviesList";

const Home = () => {
  return (
    <section className="-mt-24">
      <Hero />
      <div className="container mx-auto">
        <MoviesList genere="all" />
        <MoviesList genere="action" />
        <DownloadShows />
        <MoviesList genere="Western" />
        <FriendsAndFamily />
        <MoviesList genere="comedy" />
      </div>
    </section>
  );
};

export default Home;
