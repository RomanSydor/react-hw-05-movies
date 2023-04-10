import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import tmdbApi from "../../services/TMDB-api";
import MovieList from "../../components/MovieList";
import SearchMovieForm from "../../components/SearchMovieForm";

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
      <SearchMovieForm submit={handleSubmit} />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
