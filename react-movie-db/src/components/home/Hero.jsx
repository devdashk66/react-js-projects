import Error from "../common/Error";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { useGetMovies } from "../../hooks/useGetMovies";
import Loading from "../loading/Loading";
import Slider from "./Slider";

export const Hero = () => {
  const { state } = useGetMovies(
    `${
      import.meta.env.VITE_BASE_URL
    }list_movies.json?sort_by=year&order_by=desc`
  );

  if (state.error) {
    return <Error error="Somthing went wrong" />;
  }
  if (state.loading) {
    return <Loading />;
  }

  return (
    <Swiper
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper "
    >
      {state.data.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Slider movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
