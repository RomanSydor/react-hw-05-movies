import s from "./SearchMovieForm.module.css";

const SearchMovieForm = ({ submit }) => {
  return (
    <div className={s.formContainer}>
      <form onSubmit={submit}>
        <input
          className={s.input}
          placeholder="Please enter your movie"
          type="text"
          name="query"
          autoComplete="off"
        ></input>
        <button className={s.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovieForm;
