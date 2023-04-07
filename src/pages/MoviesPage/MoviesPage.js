import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import tmdbApi from "../../services/TMDB-api";
import MovieListItem from "../../components/MovieListItem";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const searchValue = searchParams.get("query");

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    tmdbApi
      .searchMovievs(searchValue)
      .then((result) => setMovies(result.results))
      .catch((err) => console.log(err.message));
  }, [searchValue]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = e.target.elements.query.value.trim();
    const nextParams = query !== "" ? { query } : {};

    setSearchParams(nextParams);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" autoComplete="off"></input>
        <button type="submit">Search</button>
      </form>
      <div>
        {movies &&
          movies.map((movie) => <MovieListItem key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};

export default MoviesPage;
