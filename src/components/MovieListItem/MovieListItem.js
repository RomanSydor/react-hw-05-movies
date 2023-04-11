import { Link, useLocation } from "react-router-dom";
import routes from "../../config/routes";
import s from "./MovieListItem.module.css";
import image from "../../img/movie.jpg";

const MovieListItem = ({ movie }) => {
  const location = useLocation();

  return (
    <div className={s.itemContainer}>
      <Link
        className={s.movieLink}
        to={`${routes.movies}/${movie.id}`}
        state={{ from: location }}
      >
        <div className={s.posterContent}>
          {movie.poster_path ? (
            <img
              className={s.movieImage}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            ></img>
          ) : (
            <img
              src={image}
              alt={movie.original_title}
              className={s.actorImg}
            />
          )}

          <span className={s.movieTitle}>{movie.title}</span>
        </div>
      </Link>
    </div>
  );
};

export default MovieListItem;
