import { Link, useLocation } from "react-router-dom";
import routes from "../../config/routes";

const MovieListItem = ({ movie }) => {
  const location = useLocation();

  return (
    <p>
      <Link to={`${routes.movies}/${movie.id}`} state={{ from: location }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.original_title}
        ></img>
        <span>{movie.title}</span>
      </Link>
    </p>
  );
};

export default MovieListItem;
