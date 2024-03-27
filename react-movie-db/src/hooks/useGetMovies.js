import { useEffect, useState } from "react";

export const useGetMovies = (url) => {
  const [state, setState] = useState({ loading: true, error: null, data: [] });

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.status === 200) {
          setState((prevState) => ({
            ...prevState,
            loading: false,
            data: data.data.movies,
          }));
        } else {
          throw new Error("Failed to fetch movies");
        }
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error: error.message || "Something went wrong",
        }));
      }
    };

    getMovies();
  }, [url]);

  return { state };
};
