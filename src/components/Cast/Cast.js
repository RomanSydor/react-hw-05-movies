import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../services/TMDB-api";

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
    <div>
      {casts &&
        casts.map((cast) => (
          <div key={cast.id}>
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </div>
        ))}
    </div>
  );
};

export default Cast;
