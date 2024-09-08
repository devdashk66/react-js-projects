import { Route, Routes, useLocation } from "react-router-dom";
import Genre from "./Pages/Genre";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Search from "./Pages/Search";
import SingleGenre from "./Pages/SingleGenre";
import SingleMovie from "./Pages/SingleMovie";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import NotFound from "./components/common/NotFound";
import Subscribe from "./components/common/Subscribe";

function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={query ? <Search /> : <Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/genres" element={<Genre />} />
        <Route path="/genre/:query" element={<SingleGenre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
