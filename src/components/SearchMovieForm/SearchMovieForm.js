const SearchMovieForm = ({ submit }) => {
  return (
    <form onSubmit={submit}>
      <input type="text" name="query" autoComplete="off"></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMovieForm;
