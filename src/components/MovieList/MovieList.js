import MovieListItem from "../../components/MovieListItem";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies &&
        movies.map((movie) => <MovieListItem key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MovieList;
