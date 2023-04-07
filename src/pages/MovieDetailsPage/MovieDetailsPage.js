import { useEffect, useState } from "react";
import { NavLink, useParams, useLocation, Outlet } from "react-router-dom";
import tmdbApi from "../../services/TMDB-api";
import routes from "../../config/routes";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const prevLocation = location.state?.from;
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    tmdbApi
      .getMovieDetails(movieId)
      .then((movie) => setMovie(movie))
      .catch((err) => console.log(err.message));
  }, [movieId]);

  return (
    <>
      <GoBackButton link={backLinkHref} />
      {movie && (
        <div>
          <h3>
            {movie.title}({movie.release_date.split("-")[0]})
          </h3>
          <p>
            Use score: <span>{Math.round(movie.vote_average * 10)}%</span>
          </p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.original_title}
          ></img>
          <div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            {movie.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <hr />
          <NavLink to={routes.movieCast} state={{ from: prevLocation }}>
            CAST
          </NavLink>
          <br />
          <NavLink to={routes.movieReview} state={{ from: prevLocation }}>
            Review
          </NavLink>

          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
