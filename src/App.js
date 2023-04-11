import "./App.css";
import AppBar from "./components/AppBar";
import { Route, Routes, Navigate } from "react-router-dom";
import routes from "./config/routes";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const Cast = lazy(() => import("./components/Cast"));
const Review = lazy(() => import("./components/Review"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default App;
