import { useEffect, useState } from "react";

export const useGetMovies = (url) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: [],
    movie_count: 0,
  });

  useEffect(() => {
    setState((prevState) => ({ ...prevState, error: false }));
    setState((prevState) => ({ ...prevState, loading: true }));
    const getMovies = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.status === 200) {
          setState((prevState) => ({
            ...prevState,
            loading: false,
            movie_count: data?.data?.movie_count,
            data: data?.data?.movie ? data?.data?.movie : data?.data?.movies,
          }));
        } else {
          throw new Error("Failed to fetch movies");
        }
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error: error.message || "Something went wrong",
          data: [],
        }));
      }
    };

    getMovies();
  }, [url]);

  return { state };
};
