import "./App.css";
import AppBar from "./components/AppBar";
import { Route, Routes, Navigate } from "react-router-dom";
import routes from "./config/routes";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Cast from "./components/Cast";
import Review from "./components/Review";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path={routes.movies} element={<MoviesPage />} />
          <Route path={routes.movieDetails} element={<MovieDetailsPage />}>
            <Route path={routes.movieCast} element={<Cast />} />
            <Route path={routes.movieReview} element={<Review />} />
          </Route>
          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
