import { useEffect, useState } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import tmdbApi from "../../services/TMDB-api";
import GoBackButton from "../../components/GoBackButton";
import MovieDetails from "../../components/MovieDetails";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    tmdbApi
      .getMovieDetails(movieId)
      .then((movie) => setMovie(movie))
      .catch((err) => console.log(err.message));
  }, [movieId]);

  return (
    <>
      <div className={s.backBtnContainer}>
        <GoBackButton link={backLinkHref} />
      </div>
      {movie && (
        <>
          <MovieDetails movie={movie} />

          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
