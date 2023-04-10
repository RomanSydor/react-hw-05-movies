import { useEffect, useState } from "react";
import { NavLink, useParams, useLocation, Outlet } from "react-router-dom";
import tmdbApi from "../../services/TMDB-api";
import routes from "../../config/routes";
import GoBackButton from "../../components/GoBackButton";
import MovieDetails from "../../components/MovieDetails";

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
          <MovieDetails movie={movie} />
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
