import MovieListItem from "../../components/MovieListItem";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={s.movieListContainer}>
      {movies &&
        movies.map((movie) => <MovieListItem key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MovieList;
