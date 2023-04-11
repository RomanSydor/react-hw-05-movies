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
    <Routes>
      <Route path={routes.home} element={<AppBar />}>
        <Route
          index
          element={
            <Suspense fallback={<div className="loader">Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={routes.movies}
          element={
            <Suspense fallback={<div className="loader">Loading...</div>}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path={routes.movieDetails}
          element={
            <Suspense fallback={<div className="loader">Loading...</div>}>
              <MovieDetailsPage />
            </Suspense>
          }
        >
          <Route
            path={routes.movieCast}
            element={
              <Suspense fallback={<div className="loader">Loading...</div>}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path={routes.movieReview}
            element={
              <Suspense fallback={<div className="loader">Loading...</div>}>
                <Review />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<div className="loader">Loading...</div>}>
              <Navigate to={routes.home} replace />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
