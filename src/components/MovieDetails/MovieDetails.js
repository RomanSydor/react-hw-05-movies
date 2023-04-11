import s from "./MovieDetails.module.css";
import routes from "../../config/routes";
import { NavLink, useLocation } from "react-router-dom";

const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const prevLocation = location.state?.from;

  return (
    <div className={s.detailsContainer}>
      <div className={s.imgContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          className={s.bannerImg}
        ></img>
      </div>
      <div className={s.infoContainer}>
        <div>
          <p className={s.movieTitle}>
            {movie.title} ({movie.release_date.split("-")[0]})
          </p>
          <p className={s.score}>
            <i>
              Use score: <span>{Math.round(movie.vote_average * 10)}%</span>
            </i>
          </p>
        </div>
        <p className={s.title}>Overview</p>
        <p>{movie.overview}</p>
        <p className={s.title}>Genres</p>
        {movie.genres.map((genre) => (
          <p key={genre.id} className={s.genre}>
            {genre.name}
          </p>
        ))}

        <div className={s.linksContainer}>
          <NavLink
            className={s.link}
            to={routes.movieCast}
            state={{ from: prevLocation }}
          >
            Cast
          </NavLink>
          <br />
          <NavLink
            className={s.link}
            to={routes.movieReview}
            state={{ from: prevLocation }}
          >
            Review
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
