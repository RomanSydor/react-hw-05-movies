import { useEffect, useState } from "react";
import tmdbApi from "../../services/TMDB-api";
import MovieListItem from "../../components/MovieListItem";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    tmdbApi
      .getTrending()
      .then((movies) => setMovies(movies.results))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      {movies &&
        movies.map((movie) => <MovieListItem key={movie.id} movie={movie} />)}
    </div>
  );
};

export default HomePage;
