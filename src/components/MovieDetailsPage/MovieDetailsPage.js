import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import moviesAPI from '../services/api';
import s from '../MovieDetailsPage/MovieDetailsPage.module.css';
import MoviePendingView from '../MoviePendingView/MoviePendingView';
import MovieErrorView from '../MovieErrorView/MovieErrorView';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(Status.PENDING);
  const [error, setError] = useState({});
  const srcUrl = 'https://image.tmdb.org/t/p/w500/';
  const history = useHistory();
  const location = useLocation();
  const [isVisibleCast, setIsVisibleCast] = useState(false);
  const [isVisibleReviews, setIsVisibleReviews] = useState(false);

  useEffect(() => {
    setStatus(Status.PENDING);
    const renderMovieDetails = () => {
      moviesAPI
        .fetchMovieDetails(movieId)
        .then(setMovie)
        .then(setStatus(Status.RESOLVED))
        .catch(err => {
          setError(err);
          setStatus(Status.REJECTED);
        });
    };
    renderMovieDetails();
  }, [movieId]);

  const showCast = () => {
    if (isVisibleCast === true) {
      setIsVisibleCast(false);
    }
    setIsVisibleCast(true);
  };

  const showReviews = () => {
    if (isVisibleReviews === true) {
      setIsVisibleReviews(false);
    }
    setIsVisibleReviews(true);
  };

  const goBack = () => {
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push('/goit-react-hw-04-movies');
  };

  if (status === Status.PENDING) {
    return <MoviePendingView />;
  }

  if (status === Status.REJECTED) {
    return <MovieErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <div className={s.wrapper}>
        <button onClick={goBack} className={s.button}>
          Go back
        </button>

        {movie && (
          <>
            <img
              src={`${srcUrl}${movie.poster_path}`}
              alt={movie.title}
              className={s.poster}
            />
            <h3>
              {movie.title}({movie.release_date})
            </h3>
            <span>User Score: {movie.vote_average * 10}%</span>
            <h2>Overview</h2>
            <span>{movie.overview}</span>
            {/* <h2>Genres</h2>
                        <ul>
                            {movie.genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul> */}

            <ul className={s.list}>
              <li className={s.item}>
                <NavLink
                  className={s.navlink}
                  to={{
                    pathname: `${url}/cast`,
                  }}
                  onClick={showCast}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={s.navlink}
                  to={{
                    pathname: `${url}/reviews`,
                  }}
                  onClick={showReviews}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>

            <Suspense fallback={<MoviePendingView />}>
              <Route path={`${path}/cast`}>
                {movie && isVisibleCast && <Cast />}
              </Route>

              <Route path={`${path}/reviews`}>
                {movie && isVisibleReviews && <Reviews />}
              </Route>
            </Suspense>
          </>
        )}
      </div>
    );
  }
}
