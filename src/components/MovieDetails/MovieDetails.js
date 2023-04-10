const MovieDetails = ({ movie }) => {
  return (
    <>
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
    </>
  );
};

export default MovieDetails;
