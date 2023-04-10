import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";
import tmdbApi from "../../services/TMDB-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    tmdbApi
      .getTrending()
      .then((movies) => setMovies(movies.results))
      .catch((err) => console.log(err.message));
  }, []);

  return <MovieList movies={movies} />;
};

export default HomePage;
