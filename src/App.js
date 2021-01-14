import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() =>
  import('./components/HomePage/HomePage' /* webpackChunkName: "Homepage" */),
);
const MoviesPage = lazy(() =>
  import(
    './components/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const NotFound = lazy(() => import('./components/NotFound404/NotFound'));

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer autoClose={5000} />
    </Container>
  );
}

export default App;
