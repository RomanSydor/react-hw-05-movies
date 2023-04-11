import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../services/TMDB-api";
import s from "./Cast.module.css";
import image from "../../img/Cast.jpg";

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    tmdbApi
      .getMovieCast(movieId)
      .then((result) => setCasts(result.cast))
      .catch((err) => console.log(err.message));
  }, [movieId]);

  return (
    <>
      <p className={s.title}>Actors</p>
      <div className={s.castContainer}>
        {casts &&
          casts.map((cast) => (
            <div className={s.castItem} key={cast.id}>
              <div className={s.imgContainer}>
                {cast.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt={cast.original_name}
                    className={s.actorImg}
                  ></img>
                ) : (
                  <img
                    src={image}
                    alt={cast.original_name}
                    className={s.actorImg}
                  />
                )}
              </div>
              <div className={s.castText}>
                <p className={s.name}>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cast;
